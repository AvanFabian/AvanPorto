import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Thanks for your message</AlertTitle>
      <AlertDescription>
        I will get back to you as soon as possible.
      </AlertDescription>
    </Alert>
  )
}
