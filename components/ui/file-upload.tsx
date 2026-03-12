"use client";

import * as React from "react";
import { Upload, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
  accept?: string;
  maxSize?: number;
  error?: string;
  className?: string;
  labelClassName?: string;
}

export function FileUpload({
  onFileChange,
  accept = ".pdf,.doc,.docx",
  maxSize = MAX_FILE_SIZE,
  error,
  className,
  labelClassName,
}: FileUploadProps) {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [validationError, setValidationError] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setValidationError(null);

    if (file) {
      // Validate file size
      if (file.size > maxSize) {
        setValidationError(`File too large. Maximum size is ${maxSize / 1024 / 1024}MB.`);
        e.target.value = "";
        return;
      }

      // Validate file type
      const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
        setValidationError("Invalid file type. Only PDF, DOC, and DOCX are allowed.");
        e.target.value = "";
        return;
      }
    }

    setSelectedFile(file);
    onFileChange(file);
  };

  const clearFile = () => {
    setSelectedFile(null);
    setValidationError(null);
    onFileChange(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const displayError = error || validationError;

  return (
    <div className={cn("space-y-2", className)}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        className="hidden"
        id="file-upload"
      />

      {!selectedFile ? (
        <label
          htmlFor="file-upload"
          className={cn(
            "flex items-center justify-center gap-2 h-12 px-4 rounded-md border border-dashed cursor-pointer transition-colors text-muted-foreground",
            "border-border/50 hover:border-primary hover:bg-muted/50",
            displayError && "border-destructive",
            labelClassName
          )}
        >
          <Upload className="w-4 h-4" />
          <span className="text-sm">
            Upload Resume (PDF, DOC, DOCX)
          </span>
        </label>
      ) : (
        <div
          className={cn(
            "flex items-center justify-between h-12 px-4 rounded-md border border-border/50 bg-muted/30 text-muted-foreground",
            labelClassName
          )}
        >
          <div className="flex items-center gap-2 truncate">
            <FileText className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm truncate">{selectedFile.name}</span>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={clearFile}
            className="h-8 w-8 p-0 flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}

      {displayError && (
        <p className="text-xs text-destructive">{displayError}</p>
      )}
    </div>
  );
}
