'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FaGithub } from "react-icons/fa";
import { projectsData } from "@/utils/projects";
import Link from "next/link";
import { subHeader } from "@/utils/textstyle";

export function TableData() {
  return (
    <>
    <div className="w-full justify-center my-4 text-center flex items-center">
      <h1 className={subHeader}>Projecs Archive</h1>
    </div>
      <Table className="overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Year</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Technology</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projectsData.map((project) => (
            <TableRow key={project.title}>
              <TableCell className="font-medium">{project.createdAt}</TableCell>
              <TableCell>{project.title}</TableCell>
              <TableCell>{project.TechStack}</TableCell>
              <TableCell>{project.kind}</TableCell>
              <TableCell className="text-right">
                <Link href={project.gitUrl}>
                  <FaGithub />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        </TableFooter>
      </Table>
    </>
  )
}
