
# 🟡 GoldMart AI Assistant – Smart Gold Shopping Guide

GoldMart AI Assistant is an intelligent, interactive feature within the GoldMart web application that helps both **buyers** and **sellers** make informed decisions in the gold marketplace.

Powered by cutting-edge **LLM technology (like GPT-4)**, it leverages:
- 🧠 Prompting – to understand natural language queries
- 📚 RAG (Retrieval-Augmented Generation) – to fetch contextual info from a gold knowledge base
- 🧾 Structured Output – to present clean, user-friendly responses
- ⚙️ Function Calling – to fetch live gold rates, filter products, and assist sellers

---

## 🚀 Key Features

### 👤 Buyer-Side Capabilities
- 🔍 Search for products using natural language  
  *e.g.,* “Show me bangles under ₹50,000 in Madurai”
- 📊 Get live gold rates based on karat & location  
  *e.g.,* “What is today’s 22K gold price in Chennai?”
- 💡 Learn about gold types, certifications, trends  
  *e.g.,* “What is BIS hallmarking?”
- 🛒 Compare products before purchase

### 🛍️ Seller-Side Capabilities
- 🏷️ Get suggestions for product title, description, and tags
- 💰 Receive pricing guidance based on trends
- 📸 Tips for uploading high-conversion product listings

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| 🖥️ Frontend | React.js, CSS |
| 🌐 Backend | Node.js, Express.js |
| 🧠 AI | OpenAI GPT-4 (with Function Calling & RAG) |
| 🗃️ Database | MongoDB (for product listings) |
| 📦 Vector Store (for RAG) | Chroma / FAISS / Pinecone (configurable) |
| 📡 External API | Live gold rate (mock or real) |

---

