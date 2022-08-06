export const PORT = process.env.PORT || 5000

export const corsSocket = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
}
