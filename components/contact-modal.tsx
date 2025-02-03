
import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { User, Mail, Briefcase } from 'lucide-react';

export function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Contact Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white shadow-2xl rounded-xl">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-gray-800 mb-4">
            Our Contact Representative
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-6 p-6">
          <div className="w-48 h-48 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg">
            <img 
              src="/api/placeholder/400/400" 
              alt="Contact Representative" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <User className="text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-700">
                Alexandra Rodriguez
              </h2>
            </div>
            
            <div className="flex items-center justify-center space-x-2">
              <Briefcase className="text-green-600" />
              <p className="text-gray-600">
                Senior Customer Relations Manager
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-2">
              <Mail className="text-red-600" />
              <a 
                href="mailto:alexandra.rodriguez@company.com" 
                className="text-blue-500 hover:underline"
              >
                alexandra.rodriguez@company.com
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ContactDialog;

