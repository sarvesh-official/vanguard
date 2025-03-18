"use client";

import { PaginationView } from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { EditIcon, Filter, Plus, SearchIcon, TrashIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("my-profile");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data - in a real app, this would come from your API
  const profiles = [
    { id: 1, name: "BDC CUPS MONITORING", adGroup: "UG_0365_EMS_POC", createdBy: "Maharajan, Iyappan", createdById: "4943218", createdAt: "03/12/2025", createdTime: "09:16:19 PM", channels: 5, events: 4, rules: 2, status: "active" },
    { id: 2, name: "BDC CUPS MONITORING", adGroup: "UG_0365_EMS_POC", createdBy: "Maharajan, Iyappan", createdById: "4943218", createdAt: "03/12/2025", createdTime: "09:16:19 PM", channels: 5, events: 4, rules: 2, status: "inactive" },
    { id: 3, name: "BDC CUPS MONITORING", adGroup: "UG_0365_EMS_POC", createdBy: "Maharajan, Iyappan", createdById: "4943218", createdAt: "03/12/2025", createdTime: "09:16:19 PM", channels: 5, events: 4, rules: 2, status: "active" },
    { id: 4, name: "BDC CUPS MONITORING", adGroup: "UG_0365_EMS_POC", createdBy: "Maharajan, Iyappan", createdById: "4943218", createdAt: "03/12/2025", createdTime: "09:16:19 PM", channels: 5, events: 4, rules: 2, status: "active" },
    { id: 5, name: "BDC CUPS MONITORING", adGroup: "UG_0365_EMS_POC", createdBy: "Maharajan, Iyappan", createdById: "4943218", createdAt: "03/12/2025", createdTime: "09:16:19 PM", channels: 5, events: 4, rules: 2, status: "active" },
    { id: 6, name: "BDC CUPS MONITORING", adGroup: "UG_0365_EMS_POC", createdBy: "Maharajan, Iyappan", createdById: "4943218", createdAt: "03/12/2025", createdTime: "09:16:19 PM", channels: 5, events: 4, rules: 2, status: "inactive" },
  ];

  return (
    <div className="w-full p-5 space-y-6">
      
      <div className="flex">
        <div className="w-[360px]">
          <div className="grid w-full grid-cols-2 rounded-lg bg-muted p-1">
            <button
              onClick={() => setActiveTab("my-profile")}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ${activeTab ===
              "my-profile"
                ? "bg-background text-foreground shadow"
                : "text-muted-foreground hover:text-foreground"}`}
            >
              My Profiles
            </button>
            <button
              onClick={() => setActiveTab("other-profile")}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ${activeTab ===
              "other-profile"
                ? "bg-background text-foreground shadow"
                : "text-muted-foreground hover:text-foreground"}`}
            >
              Other Profiles
            </button>
          </div>
        </div>
      </div>
      <div>
          <Card className="shadow-sm">
            <CardContent className="flex p-3 justify-between items-center">
              <div className="relative w-full max-w-xs mr-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search profiles..."
                  className="w-full rounded-md border border-gray-300 py-2 pl-10 text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all duration-200"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <SearchIcon className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div className="flex justify-center gap-3">
                <Button 
                  size="sm" 
                  className="bg-pri text-white hover:bg-pri/90 hover:text-white transition-all duration-200 flex items-center gap-1"
                >
                  <Plus className="h-4 w-4" /> Profile Onboard
                </Button>
                <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-100 transition-all duration-200">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
      </div>
      <div className="w-full">
        {activeTab === "my-profile" &&
          <Card className="w-full shadow-sm overflow-hidden">
            <CardContent className="px-0 py-0">
              <Table className="border-collapse">
                <TableHeader className="text-xs bg-gray-50">
                  <TableRow className="border-b text-black">
                    <TableHead className="border-r text-black font-bold text-left py-3">
                      Name
                    </TableHead>
                    <TableHead className="border-r text-black font-bold text-left">
                      Ad Group
                    </TableHead>
                    <TableHead className="border-r text-black font-bold text-left">
                      Created By
                    </TableHead>
                    <TableHead className="border-r text-black font-bold text-left">
                      Created At
                    </TableHead>
                    <TableHead className="border-r w-[1%] text-black font-bold text-center">
                      Channels
                    </TableHead>
                    <TableHead className="border-r w-[1%] text-black font-bold text-center">
                      Events
                    </TableHead>
                    <TableHead className="border-r w-[1%] text-black font-bold text-center">
                      Rules
                    </TableHead>
                    <TableHead className="border-r w-[1%] text-black font-bold text-center">
                      Status
                    </TableHead>
                    <TableHead className="w-[15%] text-black font-bold text-center">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-xs">
                  {profiles.length > 0 ? (
                    profiles.map((profile, index) => (
                      <TableRow 
                        key={profile.id} 
                        className={`${index % 2 === 0 ? 'border-b' : ''} hover:bg-gray-50 transition-colors duration-150`}
                      >
                        <TableCell className="border-r font-medium text-left">
                          {profile.name}
                        </TableCell>
                        <TableCell className="border-r text-left">{profile.adGroup}</TableCell>
                        <TableCell className="border-r text-left">
                          <span>{profile.createdBy}</span> <br />
                          <span className="text-gray-500">({profile.createdById})</span>
                        </TableCell>
                        <TableCell className="border-r text-left">
                          <span>{profile.createdAt}</span> <br /> 
                          <span className="text-gray-500">{profile.createdTime}</span>
                        </TableCell>
                        <TableCell className="border-r text-center font-medium">{profile.channels}</TableCell>
                        <TableCell className="border-r text-center font-medium">{profile.events}</TableCell>
                        <TableCell className="border-r text-center font-medium">{profile.rules}</TableCell>
                        <TableCell className="border-r text-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            profile.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {profile.status === 'active' ? 'Active' : 'Inactive'}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex justify-center space-x-2">
                            <Button variant="outline" size="icon" className="h-7 w-7 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
                              <EditIcon className="h-3.5 w-3.5" />
                            </Button>
                            <Button variant="outline" size="icon" className="h-7 w-7 text-red-500 hover:bg-red-50 hover:text-red-600 border-red-200 transition-all duration-200">
                              <TrashIcon className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={9} className="h-32 text-center text-gray-500">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <SearchIcon className="h-8 w-8 text-gray-300" />
                          <p className="text-sm">No profiles found</p>
                          {searchQuery && <p className="text-xs">Try adjusting your search criteria</p>}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>}

        {activeTab === "other-profile" &&
          <Card className="w-full shadow-sm overflow-hidden">
            <CardContent className="px-0 py-0">
              <Table className="border-collapse">
                <TableHeader className="text-xs bg-gray-50">
                  <TableRow className="border-b text-black">
                    <TableHead className="border-r text-black font-bold text-left py-3">
                      Name
                    </TableHead>
                    <TableHead className="border-r text-black font-bold text-left">
                      Ad Group
                    </TableHead>
                    <TableHead className="border-r text-black font-bold text-left">
                      Created By
                    </TableHead>
                    <TableHead className="border-r text-black font-bold text-left">
                      Created At
                    </TableHead>
                    <TableHead className="border-r w-[1%] text-black font-bold text-center">
                      Channels
                    </TableHead>
                    <TableHead className="border-r w-[1%] text-black font-bold text-center">
                      Events
                    </TableHead>
                    <TableHead className="border-r w-[1%] text-black font-bold text-center">
                      Rules
                    </TableHead>
                    <TableHead className="border-r w-[1%] text-black font-bold text-center">
                      Status
                    </TableHead>
                    <TableHead className="w-[15%] text-black font-bold text-center">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-xs">
                  {profiles.length > 0 ? (
                    profiles.map((profile, index) => (
                      <TableRow 
                        key={profile.id} 
                        className={`${index % 2 === 0 ? 'border-b' : ''} hover:bg-gray-50 transition-colors duration-150`}
                      >
                        <TableCell className="border-r font-medium text-left">
                          {profile.name}
                        </TableCell>
                        <TableCell className="border-r text-left">{profile.adGroup}</TableCell>
                        <TableCell className="border-r text-left">
                          <span>{profile.createdBy}</span> <br />
                          <span className="text-gray-500">({profile.createdById})</span>
                        </TableCell>
                        <TableCell className="border-r text-left">
                          <span>{profile.createdAt}</span> <br /> 
                          <span className="text-gray-500">{profile.createdTime}</span>
                        </TableCell>
                        <TableCell className="border-r text-center font-medium">{profile.channels}</TableCell>
                        <TableCell className="border-r text-center font-medium">{profile.events}</TableCell>
                        <TableCell className="border-r text-center font-medium">{profile.rules}</TableCell>
                        <TableCell className="border-r text-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            profile.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {profile.status === 'active' ? 'Active' : 'Inactive'}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex justify-center space-x-2">
                            <Button variant="outline" size="icon" className="h-7 w-7 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
                              <EditIcon className="h-3.5 w-3.5" />
                            </Button>
                            <Button variant="outline" size="icon" className="h-7 w-7 text-red-500 hover:bg-red-50 hover:text-red-600 border-red-200 transition-all duration-200">
                              <TrashIcon className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={9} className="h-32 text-center text-gray-500">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <SearchIcon className="h-8 w-8 text-gray-300" />
                          <p className="text-sm">No profiles found</p>
                          {searchQuery && <p className="text-xs">Try adjusting your search criteria</p>}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>}
            <div className="mt-6 flex justify-between w-full items-center">
              <div className="flex items-center space-x-2">
                <select className="border border-gray-300 rounded-md p-2 text-sm self-end bg-white hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200">
                  <option value="10">10 Rows</option>
                  <option value="20">20 Rows</option>
                  <option value="30">30 Rows</option>
                  <option value="50">50 Rows</option>
                </select>
                <span className="text-sm text-gray-500">Showing 1 of 6 profiles</span>
              </div>
              <PaginationView />
            </div>
      </div>
    </div>
  );
}
