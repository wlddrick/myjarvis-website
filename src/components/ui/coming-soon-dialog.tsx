'use client'

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Bell } from "lucide-react";

interface ComingSoonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ComingSoonDialog: React.FC<ComingSoonDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black">
            <Calendar className="h-8 w-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold text-black">Coming Soon!</DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            We're working hard to bring you an amazing app experience. 
            Stay tuned for updates!
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-black" />
              <div>
                <h4 className="font-semibold text-black">Get Notified</h4>
                <p className="text-sm text-gray-700">Be the first to know when we launch!</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
            <Button 
              className="flex-1 bg-black text-white hover:bg-gray-800"
              onClick={() => {
                // You could add newsletter signup or notification logic here
                onOpenChange(false);
              }}
            >
              Notify Me
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
