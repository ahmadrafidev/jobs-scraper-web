import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Component() {
  return (
    <div className="bg-white flex flex-col min-h-[100dvh]">
      <section className="bg-white mx-auto py-20 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Find Your Dream Job</h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Search through thousands of job listings and find the perfect fit for your skills and experience.
            </p>
            <form className="flex items-center max-w-2xl mx-auto">
              <label className="sr-only" htmlFor="job-search">
                Search jobs
              </label>
              <Input className="flex-1 min-w-0" id="job-search" placeholder="Search jobs..." type="search" />
              <div className="ml-2">
                <label className="sr-only" htmlFor="job-location">
                  Job Location
                </label>
                <Input className="min-w-[150px]" id="job-location" placeholder="Job Location" type="text" />
              </div>
              <Button className="ml-2" type="submit">
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-gray-50 py-6 dark:bg-gray-800 mt-auto">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between mx-auto">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Job Board by The Scraper. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link className="text-sm text-gray-500 hover:underline" href="#">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
