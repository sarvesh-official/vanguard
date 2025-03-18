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
import { EditIcon, Filter, TrashIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("my-profile");

  return (
    <div className="w-full p-5">
      <div className="flex">
        <div className="w-[360px]">
          <div className="grid w-full grid-cols-2 rounded-lg bg-muted p-1">
            <button
              onClick={() => setActiveTab("my-profile")}
              className={`rounded-md px-3 py-1.5 text-sm font-medium ${activeTab ===
              "my-profile"
                ? "bg-background text-foreground shadow"
                : "text-muted-foreground hover:text-foreground"}`}
            >
              My Profiles
            </button>
            <button
              onClick={() => setActiveTab("other-profile")}
              className={`rounded-md px-3 py-1.5 text-sm font-medium ${activeTab ===
              "other-profile"
                ? "bg-background text-foreground shadow"
                : "text-muted-foreground hover:text-foreground"}`}
            >
              Other Profiles
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6">
          <Card>
            <CardContent className="flex p-3 justify-between">
              <div className="relative w-full max-w-xs mr-4">
                <input
                  type="text"
                  placeholder="Search profiles..."
                  className="w-full rounded-md border border-gray-300 p-2 pl-10 text-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-center gap-3">
              <Button variant="outline" size="sm" className="mr-2 bg-pri text-white hover:bg-pri/90 hover:text-white">
                Profile Onboard
              </Button>
              <Button variant="outline" size="sm" className="mr-2">
              <Filter/>
              </Button>
              </div>
            </CardContent>
          </Card>
      </div>
      <div className="w-full mt-6">
        {activeTab === "my-profile" &&
          <Card className="w-full">
            <CardContent className="px-0 py-0">
              <Table className="border-collapse">
                <TableHeader className="text-xs">
                  <TableRow className="border-b text-black">
                    <TableHead className="border-r text-black font-bold text-left">
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
                    <TableHead className="w-[15%] text-black font-bold text-center">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-xs">
                  <TableRow className="border-b">
                    <TableCell className="border-r font-medium text-left">
                      BDC CUPS MONITORING
                    </TableCell>
                    <TableCell className="border-r text-left">UG_0365_EMS_POC</TableCell>
                    <TableCell className="border-r text-left">
                      <span>Maharajan, Iyappan</span> <br />
                      <span>(4943218)</span>
                    </TableCell>
                    <TableCell className="border-r text-left">
                      <span>03/12/2025</span> <br /> <span>09:16:19 PM</span>
                    </TableCell>
                    <TableCell className="border-r text-center">5</TableCell>
                    <TableCell className="border-r text-center">4</TableCell>
                    <TableCell className="border-r text-center">2</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-4" >
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <EditIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" className="h-8 w-8">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-medium text-left">
                      BDC CUPS MONITORING
                    </TableCell>
                    <TableCell className="border-r text-left">UG_0365_EMS_POC</TableCell>
                    <TableCell className="border-r text-left">
                      <span>Maharajan, Iyappan</span> <br />
                      <span>(4943218)</span>
                    </TableCell>
                    <TableCell className="border-r text-left">
                      <span>03/12/2025</span> <br /> <span>09:16:19 PM</span>
                    </TableCell>
                    <TableCell className="border-r text-center">5</TableCell>
                    <TableCell className="border-r text-center">4</TableCell>
                    <TableCell className="border-r text-center">2</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-4" >
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <EditIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" className="h-8 w-8">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableCell className="border-r font-medium text-left">
                      BDC CUPS MONITORING
                    </TableCell>
                    <TableCell className="border-r text-left">UG_0365_EMS_POC</TableCell>
                    <TableCell className="border-r text-left">
                      <span>Maharajan, Iyappan</span> <br />
                      <span>(4943218)</span>
                    </TableCell>
                    <TableCell className="border-r text-left">
                      <span>03/12/2025</span> <br /> <span>09:16:19 PM</span>
                    </TableCell>
                    <TableCell className="border-r text-center">5</TableCell>
                    <TableCell className="border-r text-center">4</TableCell>
                    <TableCell className="border-r text-center">2</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-4" >
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <EditIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" className="h-8 w-8">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-medium text-left">
                      BDC CUPS MONITORING
                    </TableCell>
                    <TableCell className="border-r text-left">UG_0365_EMS_POC</TableCell>
                    <TableCell className="border-r text-left">
                      <span>Maharajan, Iyappan</span> <br />
                      <span>(4943218)</span>
                    </TableCell>
                    <TableCell className="border-r text-left">
                      <span>03/12/2025</span> <br /> <span>09:16:19 PM</span>
                    </TableCell>
                    <TableCell className="border-r text-center">5</TableCell>
                    <TableCell className="border-r text-center">4</TableCell>
                    <TableCell className="border-r text-center">2</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-4" >
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <EditIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" className="h-8 w-8">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableCell className="border-r font-medium text-left">
                      BDC CUPS MONITORING
                    </TableCell>
                    <TableCell className="border-r text-left">UG_0365_EMS_POC</TableCell>
                    <TableCell className="border-r text-left">
                      <span>Maharajan, Iyappan</span> <br />
                      <span>(4943218)</span>
                    </TableCell>
                    <TableCell className="border-r text-left">
                      <span>03/12/2025</span> <br /> <span>09:16:19 PM</span>
                    </TableCell>
                    <TableCell className="border-r text-center">5</TableCell>
                    <TableCell className="border-r text-center">4</TableCell>
                    <TableCell className="border-r text-center">2</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-4" >
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <EditIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" className="h-8 w-8">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-medium text-left">
                      BDC CUPS MONITORING
                    </TableCell>
                    <TableCell className="border-r text-left">UG_0365_EMS_POC</TableCell>
                    <TableCell className="border-r text-left">
                      <span>Maharajan, Iyappan</span> <br />
                      <span>(4943218)</span>
                    </TableCell>
                    <TableCell className="border-r text-left">
                      <span>03/12/2025</span> <br /> <span>09:16:19 PM</span>
                    </TableCell>
                    <TableCell className="border-r text-center">5</TableCell>
                    <TableCell className="border-r text-center">4</TableCell>
                    <TableCell className="border-r text-center">2</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-4" >
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <EditIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" className="h-8 w-8">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>}

        {activeTab === "other-profile" &&
          <Card className="w-full">
            <CardContent className="px-0 py-0">
            <Table className="border-collapse">
                <TableHeader className="text-xs">
                  <TableRow className="border-b text-black">
                    <TableHead className="border-r text-black font-bold text-left">
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
                    <TableHead className="w-[15%] text-black font-bold text-center">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-xs">
                  <TableRow className="border-b">
                    <TableCell className="border-r font-medium text-left">
                      BDC CUPS MONITORING
                    </TableCell>
                    <TableCell className="border-r text-left">UG_0365_EMS_POC</TableCell>
                    <TableCell className="border-r text-left">
                      <span>Maharajan, Iyappan</span> <br />
                      <span>(4943218)</span>
                    </TableCell>
                    <TableCell className="border-r text-left">
                      <span>03/12/2025</span> <br /> <span>09:16:19 PM</span>
                    </TableCell>
                    <TableCell className="border-r text-center">5</TableCell>
                    <TableCell className="border-r text-center">4</TableCell>
                    <TableCell className="border-r text-center">2</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-4" >
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <EditIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" className="h-8 w-8">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-medium text-left">
                      BDC CUPS MONITORING
                    </TableCell>
                    <TableCell className="border-r text-left">UG_0365_EMS_POC</TableCell>
                    <TableCell className="border-r text-left">
                      <span>Maharajan, Iyappan</span> <br />
                      <span>(4943218)</span>
                    </TableCell>
                    <TableCell className="border-r text-left">
                      <span>03/12/2025</span> <br /> <span>09:16:19 PM</span>
                    </TableCell>
                    <TableCell className="border-r text-center">5</TableCell>
                    <TableCell className="border-r text-center">4</TableCell>
                    <TableCell className="border-r text-center">2</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-4" >
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <EditIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" className="h-8 w-8">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableCell className="border-r font-medium text-left">
                      BDC CUPS MONITORING
                    </TableCell>
                    <TableCell className="border-r text-left">UG_0365_EMS_POC</TableCell>
                    <TableCell className="border-r text-left">
                      <span>Maharajan, Iyappan</span> <br />
                      <span>(4943218)</span>
                    </TableCell>
                    <TableCell className="border-r text-left">
                      <span>03/12/2025</span> <br /> <span>09:16:19 PM</span>
                    </TableCell>
                    <TableCell className="border-r text-center">5</TableCell>
                    <TableCell className="border-r text-center">4</TableCell>
                    <TableCell className="border-r text-center">2</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-4" >
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <EditIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" className="h-8 w-8">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-medium text-left">
                      BDC CUPS MONITORING
                    </TableCell>
                    <TableCell className="border-r text-left">UG_0365_EMS_POC</TableCell>
                    <TableCell className="border-r text-left">
                      <span>Maharajan, Iyappan</span> <br />
                      <span>(4943218)</span>
                    </TableCell>
                    <TableCell className="border-r text-left">
                      <span>03/12/2025</span> <br /> <span>09:16:19 PM</span>
                    </TableCell>
                    <TableCell className="border-r text-center">5</TableCell>
                    <TableCell className="border-r text-center">4</TableCell>
                    <TableCell className="border-r text-center">2</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-4" >
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <EditIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" className="h-8 w-8">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableCell className="border-r font-medium text-left">
                      BDC CUPS MONITORING
                    </TableCell>
                    <TableCell className="border-r text-left">UG_0365_EMS_POC</TableCell>
                    <TableCell className="border-r text-left">
                      <span>Maharajan, Iyappan</span> <br />
                      <span>(4943218)</span>
                    </TableCell>
                    <TableCell className="border-r text-left">
                      <span>03/12/2025</span> <br /> <span>09:16:19 PM</span>
                    </TableCell>
                    <TableCell className="border-r text-center">5</TableCell>
                    <TableCell className="border-r text-center">4</TableCell>
                    <TableCell className="border-r text-center">2</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-4" >
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <EditIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" className="h-8 w-8">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r font-medium text-left">
                      BDC CUPS MONITORING
                    </TableCell>
                    <TableCell className="border-r text-left">UG_0365_EMS_POC</TableCell>
                    <TableCell className="border-r text-left">
                      <span>Maharajan, Iyappan</span> <br />
                      <span>(4943218)</span>
                    </TableCell>
                    <TableCell className="border-r text-left">
                      <span>03/12/2025</span> <br /> <span>09:16:19 PM</span>
                    </TableCell>
                    <TableCell className="border-r text-center">5</TableCell>
                    <TableCell className="border-r text-center">4</TableCell>
                    <TableCell className="border-r text-center">2</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-4" >
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <EditIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" className="h-8 w-8">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>}
            <div className="mt-6 flex justify-between w-full">
            <select className="border border-gray-300 rounded-md p-2 text-sm mr-4 self-end">
              <option value="10">10 Rows</option>
              <option value="20">20 Rows</option>
              <option value="30">30 Rows</option>
              <option value="50">50 Rows</option>
            </select>
            <PaginationView />
            </div>
      </div>
    </div>
  );
}
