"use client";

import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
      AlertDialog,
      AlertDialogAction,
      AlertDialogCancel,
      AlertDialogContent,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogTitle,
      AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useDeleteGear } from "../hooks/useDeleteGear";

interface Props {
      gearId: string;
}

export default function DeleteGearDialog({
      gearId,
}: Props) {
      const { mutate, isPending } =
            useDeleteGear();

      return (
            <AlertDialog>

                  <AlertDialogTrigger>
                        <Button
                              variant="destructive"
                              size="sm"
                        >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                        </Button>
                  </AlertDialogTrigger>

                  <AlertDialogContent>

                        <AlertDialogHeader>

                              <AlertDialogTitle>

                                    Delete Gear?

                              </AlertDialogTitle>

                              <AlertDialogDescription>

                                    This action cannot be undone.
                                    This will permanently delete this gear
                                    from your inventory.

                              </AlertDialogDescription>

                        </AlertDialogHeader>

                        <AlertDialogFooter>

                              <AlertDialogCancel>

                                    Cancel

                              </AlertDialogCancel>

                              <AlertDialogAction
                                    disabled={isPending}
                                    onClick={() => mutate(gearId)}
                              >
                                    {isPending
                                          ? "Deleting..."
                                          : "Delete"}

                              </AlertDialogAction>

                        </AlertDialogFooter>

                  </AlertDialogContent>

            </AlertDialog>
      );
}