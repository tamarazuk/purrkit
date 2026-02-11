import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

type InsertWaitlistInput = {
  email: string;
};

const apiBaseUrl = import.meta.env.VITE_API_URL ?? "";
const waitlistEndpoint = `${apiBaseUrl}/api/waitlist`;

export function useCreateWaitlistEntry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertWaitlistInput) => {
      const res = await fetch(waitlistEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let errorMessage = "Failed to join waitlist";
        try {
          const error = (await res.json()) as { message?: string };
          if (error?.message) {
            errorMessage = error.message;
          } else if (res.status === 400) {
            errorMessage = "Invalid email address";
          } else if (res.status === 409) {
            errorMessage = "You're already on the waitlist";
          }
        } catch {
          if (res.status === 400) {
            errorMessage = "Invalid email address";
          } else if (res.status === 409) {
            errorMessage = "You're already on the waitlist";
          }
        }
        throw new Error(errorMessage);
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Welcome to the clowder! 🐾",
        description: "You've been added to the waitlist successfully.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Oops!",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
