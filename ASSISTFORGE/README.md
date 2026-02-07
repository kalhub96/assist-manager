# AssistForge
## Tech Stack

AssetForge is a secure, desktop-first asset management system built with a layered, multi-language architecture.

### Frontend
- **React** – Component-based UI
- **TypeScript** – Type-safe frontend logic
- **Tailwind CSS** – Monochrome, engineering-focused design

### Desktop Shell
- **Tauri (Rust)** – Secure, lightweight desktop wrapper providing IPC, filesystem control, and process management

### Backend
- **Go** – Core backend and system orchestrator
  - Asset metadata management
  - Versioning and audit logs
  - Authentication and permissions
  - AI service coordination

### Systems & Security
- **C** – Low-level modules for:
  - File integrity verification
  - Hashing
  - Cryptographic helpers

### Artificial Intelligence
- **Python** – Isolated AI service for:
  - Asset auto-tagging
  - Similarity & duplicate detection
  - Semantic search
  - Version analysis

### Data
- **SQL** – Local relational database for assets, versions, and audit logs
- **JSON** – Cross-layer data contracts and configuration