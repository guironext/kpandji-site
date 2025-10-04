"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { createEmployee } from "@/lib/actions/onboarding";
import { UserRole } from "@/lib/generated/prisma";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";

const employeeSchema = z.object({
  firstName: z.string().min(1, "prénoms obligatoire").max(55),
  lastName: z.string().min(1, "nom obligatoire").max(55),
  email: z.string().email("email invalide ").max(100),
  department: z.string().optional(),
  role: z.string().min(1, "role est obligatoire").max(55),
});

type EmployeeFormValues = z.infer<typeof employeeSchema>;

interface OnboardingFormProps {
  userEmail: string;
  firstName: string;
  lastName: string;
}

const OnboardingForm = ({
  userEmail,
  firstName,
  lastName,
}: OnboardingFormProps) => {
  
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [accountType, setAccountType] = useState<"admin" | "employee">(
    "employee"
  );
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const employeeForm = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      firstName,
      lastName,
      email: userEmail,
      department: "",
      role: "",
    },
  });

  

  const handleEmployeeSubmit = async (data: EmployeeFormValues) => {
    if (!user) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await createEmployee(
        data.department || undefined,
        user.id,
        data.role as UserRole
      );

      console.log(response);

      if (response?.success) {
        console.log("Employee created successfully");
        toast.success("Onboarding completed successfully.");
        
        // Force Clerk to reload session
        await user.reload();
        
        // Redirect to home - middleware will handle routing
        router.push("/");
        router.refresh();
      }
    } catch (error: unknown) {
      console.error(`Error creating employee: ${error}`);
      setError(
        error instanceof Error ? error.message : "Failed to complete onboarding"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center justify-center">
          Bienvennue sur 
        </CardTitle>
        <CardTitle className="text-xl font-bold text-center justify-center">
        KPANDJI MANAGEMENT BOARD
        </CardTitle>
        
        <CardDescription>
         Completer ce formulaire pour créer votre compte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Type de compte</Label>
            <RadioGroup
              defaultValue="employee"
              value={accountType}
              onValueChange={(value) =>
                setAccountType(value as "admin" | "employee")
              }
              className="grid grid-cols-2 gap-4"
            >
              <div>
                <RadioGroupItem
                  value="employee"
                  id="employee"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="employee"
                  className={cn(
                    "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground",
                    accountType === "employee" &&
                      "bg-accent text-accent-foreground"
                  )}
                >
                  <span>Employer</span>
                </Label>
              </div>
              
            </RadioGroup>
          </div>
          <Separator />

          {accountType === "employee" ? (
            <Form {...employeeForm}>
              <form
                onSubmit={employeeForm.handleSubmit(handleEmployeeSubmit)}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={employeeForm.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prénoms</FormLabel>
                        <FormControl>
                          <Input {...field} disabled className="bg-gray-100" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={employeeForm.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input {...field} disabled className="bg-gray-100" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={employeeForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} disabled className="bg-gray-100" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">

                <FormField
                  control={employeeForm.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Départment (optional)</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="e.g. Engineering, sales, etc."
                          className="bg-gray-100"
                          />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />


                <FormField
                  control={employeeForm.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rôle</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-100">
                            <SelectValue placeholder="Sélectionnez un rôle" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ADMIN">Admin</SelectItem>
                          <SelectItem value="EMPLOYEE">Employé</SelectItem>
                          <SelectItem value="MAGASINIER">Magasinier</SelectItem>
                          <SelectItem value="CHEFUSINE">Chef Usine</SelectItem>
                          <SelectItem value="CHEFEQUIPE">Chef Équipe</SelectItem>
                          <SelectItem value="CHEFQUALITE">Chef Qualité</SelectItem>
                          <SelectItem value="MANAGER">Manager</SelectItem>
                          <SelectItem value="COMMERCIAL">Commercial</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                  />
                  </div>

                {error && (
                  <Alert variant={"destructive"}>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing" : "Enregistrer"}
                </Button>
              </form>
            </Form>
          ) 
          : 
          (
            <div></div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default OnboardingForm;
