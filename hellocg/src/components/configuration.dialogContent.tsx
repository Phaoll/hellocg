import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogHeader } from "./ui/dialog";

export function ConfigurationDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Configurer les questions</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
