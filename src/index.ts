#!/usr/bin/env node
import { fetchData } from "./api/data";
import Table from "cli-table";
import { AxiosError } from "axios";

if (process.argv.length === 1 || process.argv.length === 2 || process.argv.length > 3) {
   console.log("Please use a correct input: trackmypack <tracking_id>");
   process.exit(1);
}

const trackingId = process.argv[2];

// main function
(async () => {
   try {
      // print that a user must wait
      console.log("Processing...");

      // wait for tracking data
      const data = await fetchData(trackingId);

      // create a new cli table
      const table = new Table({
         head: ["Carrier", "Date", "Status"],
      });

      // push the data to the cli table
      for (const { trackingOperatorStatuses } of data.changes) {
         for (const status of trackingOperatorStatuses) {
            table.push([
               data.operator,
               status.updatedAt.replace("T", " "),
               status.description +
                  (status.place !== null && status.place.length > 0 ? " - " + status.place : ""),
            ]);
         }
      }

      // print the table
      console.log(table.toString());
      process.exit(0);
   } catch (err) {
      const error = err as AxiosError; // only an axios error can appear here

      if (error.response?.status === 500) {
         console.log("Invalid tracking number.");
      } else {
         console.log(error.response?.data.message);
      }
      process.exit(1);
   }
})();
