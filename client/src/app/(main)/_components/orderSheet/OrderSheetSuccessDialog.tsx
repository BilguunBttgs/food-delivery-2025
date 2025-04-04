import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

type OrderSheetSuccessDialogProps = {
  open: boolean;
  closeModal: () => void;
};

export const OrderSheetSuccessDialog = ({
  open,
  closeModal,
}: OrderSheetSuccessDialogProps) => {
  return (
    <Dialog open={open}>
      <DialogContent className="max-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            Your order has been successfully placed !
          </DialogTitle>
        </DialogHeader>

        <div className="w-full flex justify-center my-2">
          <Image
            src="/boyWithBalloon.png"
            width={200}
            height={500}
            alt="boy with balloon"
          />
        </div>

        <div className="text-center">
          <Button
            onClick={closeModal}
            variant="secondary"
            size="lg"
            className="rounded-full"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
