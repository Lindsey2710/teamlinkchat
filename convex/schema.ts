import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({        
        email: v.string(),
        name: v.optional(v.string()),
        image: v.string(),
        tokenIdentifier: v.string(),
        isOnline: v.boolean(),
    }).index("by_tokenIdentifier", ["tokenIdentifier"]),
});
