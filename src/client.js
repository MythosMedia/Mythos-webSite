import client from "@sanity/client"

export default client({
    projectId: "c9cfpht3",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-08"
  })