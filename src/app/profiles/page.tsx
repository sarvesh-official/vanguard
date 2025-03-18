"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("my-profile");

  return (
    <div className="w-full p-6">
      <div className="flex">
        <div className="w-[400px]">
          <div className="grid w-full grid-cols-2 rounded-lg bg-muted p-1">
            <button
              onClick={() => setActiveTab("my-profile")}
              className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                activeTab === "other-profile" 
                  ? "bg-background text-foreground shadow" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              My Profiles
            </button>
            <button
              onClick={() => setActiveTab("other-profile")}
              className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                activeTab === "password" 
                  ? "bg-background text-foreground shadow" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Other Profiles
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full mt-6">
        {activeTab === "my-profile" && (
          <Card className="w-full">
            <CardContent className="p-6">
              <Table className="border-collapse">
                <TableHeader>
                  <TableRow className="border-b text-black">
                    <TableHead className="border-r text-black">Name</TableHead>
                    <TableHead className="border-r">Ad Group</TableHead>
                    <TableHead className="border-r">Created By</TableHead>
                    <TableHead className="border-r">Created At</TableHead>
                    <TableHead className="border-r text-center">Channels</TableHead>
                    <TableHead className="border-r w-[8%] text-center">Events</TableHead>
                    <TableHead className="border-r w-[8%] text-center">Rules</TableHead>
                    <TableHead className="w-[15%] text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b">
                    <TableCell className="border-r font-medium">BDC CUPS MONITORING</TableCell>
                    <TableCell className="border-r">UG_0365_EMS_POC</TableCell>
                    <TableCell className="border-r">Maharajan, Iyappan(4943218)</TableCell>
                    <TableCell className="border-r">03/12/2025 09:16:19 PM</TableCell>
                    <TableCell className="border-r text-center">5</TableCell>
                    <TableCell className="border-r text-center">4</TableCell>
                    <TableCell className="border-r text-center">2</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                      <Button variant="outline" size="sm">Delete</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-medium">BDC CUPS MONITORING</TableCell>
                    <TableCell className="border-r">UG_0365_EMS_POC</TableCell>
                    <TableCell className="border-r">Maharajan, Iyappan(4943218)</TableCell>
                    <TableCell className="border-r">03/12/2025 09:16:19 PM</TableCell>
                    <TableCell className="border-r text-center">5</TableCell>
                    <TableCell className="border-r text-center">4</TableCell>
                    <TableCell className="border-r text-center">2</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                      <Button variant="outline" size="sm">Delete</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
        
        {activeTab === "other-profile" && (
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Other Profiles</CardTitle>
              <CardDescription>
                View profiles shared with you.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Table className="border-collapse">
                <TableCaption>Other profiles shared with you</TableCaption>
                <TableHeader>
                  <TableRow className="border-b text-black">
                    <TableHead className="border-r">Name</TableHead>
                    <TableHead className="border-r">Owner</TableHead>
                    <TableHead className="border-r">Shared Date</TableHead>
                    <TableHead className="border-r">Access Level</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b">
                    <TableCell className="border-r font-medium">Project X</TableCell>
                    <TableCell className="border-r">Alex Miller</TableCell>
                    <TableCell className="border-r">2023-05-15</TableCell>
                    <TableCell className="border-r">Read</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-medium">Marketing Campaign</TableCell>
                    <TableCell className="border-r">Jessica Taylor</TableCell>
                    <TableCell className="border-r">2023-06-22</TableCell>
                    <TableCell className="border-r">Edit</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="px-6 py-4 border-t">
              <Button>Request Access</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
