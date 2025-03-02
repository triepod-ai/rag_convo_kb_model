import React, { useState } from 'react';
import { MessageSquare, Database, Search, RefreshCw, Layers, Server, Cpu } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Conversation Knowledge Base</h1>
          <p className="text-gray-500 mt-1">Retrieval-Augmented Generation System</p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <nav className="flex space-x-4">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'overview' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'architecture' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Architecture
            </button>
            <button 
              onClick={() => setActiveTab('workflow')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'workflow' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Workflow
            </button>
            <button 
              onClick={() => setActiveTab('code')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'code' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Code Structure
            </button>
          </nav>
        </div>
        
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'architecture' && <ArchitectureTab />}
        {activeTab === 'workflow' && <WorkflowTab />}
        {activeTab === 'code' && <CodeStructureTab />}
      </main>
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900">Conversation Knowledge Base System</h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          A comprehensive RAG solution for processing conversation data
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard 
            icon={<Database className="h-6 w-6 text-blue-500" />}
            title="Vector Database"
            description="Stores conversation chunks as embeddings for semantic search using Qdrant"
          />
          <FeatureCard 
            icon={<Layers className="h-6 w-6 text-blue-500" />}
            title="Conversation Chunking"
            description="Processes conversations with sliding windows to maintain context"
          />
          <FeatureCard 
            icon={<Search className="h-6 w-6 text-blue-500" />}
            title="Semantic Search"
            description="Retrieves relevant conversation history based on semantic similarity"
          />
          <FeatureCard 
            icon={<RefreshCw className="h-6 w-6 text-blue-500" />}
            title="Real-time Updates"
            description="Background processing for continuous knowledge base updates"
          />
          <FeatureCard 
            icon={<MessageSquare className="h-6 w-6 text-blue-500" />}
            title="Assistant Integration"
            description="Direct integration with AI assistants like OpenAI and Anthropic"
          />
          <FeatureCard 
            icon={<Server className="h-6 w-6 text-blue-500" />}
            title="Scalable Architecture"
            description="Containerized components with separate scaling for high performance"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dt className="text-sm font-medium text-gray-500 truncate">
              {title}
            </dt>
            <dd className="flex items-baseline">
              <div className="text-sm text-gray-900">
                {description}
              </div>
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureTab() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900">System Architecture</h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Key components and their interactions
        </p>
      </div>
      <div className="border-t border-gray-200">
        <div className="px-4 py-5 sm:px-6">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md inline-flex items-center">
                <Cpu className="h-6 w-6 text-blue-500 mr-2" />
                <span className="font-medium">AI Assistant</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-blue-300"></div>
            </div>
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md inline-flex items-center">
                <Server className="h-6 w-6 text-green-500 mr-2" />
                <span className="font-medium">Knowledge Base API</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-8 bg-blue-300 mb-4"></div>
                <div className="bg-white p-4 rounded-lg shadow-md inline-flex items-center">
                  <Database className="h-6 w-6 text-purple-500 mr-2" />
                  <span className="font-medium">Vector Database</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-8 bg-blue-300 mb-4"></div>
                <div className="bg-white p-4 rounded-lg shadow-md inline-flex items-center">
                  <Layers className="h-6 w-6 text-orange-500 mr-2" />
                  <span className="font-medium">Conversation Processor</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-8 bg-blue-300 mb-4"></div>
                <div className="bg-white p-4 rounded-lg shadow-md inline-flex items-center">
                  <Search className="h-6 w-6 text-indigo-500 mr-2" />
                  <span className="font-medium">Embedding Model</span>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-md font-medium text-gray-900 mb-3">Technology Stack</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Database className="h-5 w-5 text-gray-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Vector Database</p>
                <p className="text-sm text-gray-500">Qdrant (alternatives: Pinecone, Weaviate, Milvus)</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Cpu className="h-5 w-5 text-gray-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Embedding Model</p>
                <p className="text-sm text-gray-500">Sentence-Transformers (alternative: OpenAI embeddings)</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Server className="h-5 w-5 text-gray-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">API Framework</p>
                <p className="text-sm text-gray-500">FastAPI</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MessageSquare className="h-5 w-5 text-gray-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Assistant Integration</p>
                <p className="text-sm text-gray-500">Compatible with OpenAI, Anthropic, etc.</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-md font-medium text-gray-900 mb-3">Deployment Options</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
            <li>Docker containers for each component</li>
            <li>Scale vector database separately for optimized performance</li>
            <li>Use message queues (Kafka/RabbitMQ) for high-volume deployments</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function WorkflowTab() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900">System Workflow</h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          How data flows through the system
        </p>
      </div>
      <div className="border-t border-gray-200">
        <div className="px-4 py-5 sm:px-6">
          <div className="space-y-8">
            <WorkflowStep 
              number="1"
              title="Conversation Ingestion"
              description="JSON conversation logs are submitted to the API"
              details={[
                "Conversations are submitted via API endpoint",
                "Background processing is initiated",
                "Status tracking for each conversation update"
              ]}
            />
            
            <WorkflowStep 
              number="2"
              title="Conversation Processing"
              description="Raw conversations are processed into chunks"
              details={[
                "Conversations are normalized and preprocessed",
                "Messages are chunked using sliding window approach",
                "Metadata is extracted and enriched (participants, topics, etc.)"
              ]}
            />
            
            <WorkflowStep 
              number="3"
              title="Vector Embedding"
              description="Text chunks are converted to vector embeddings"
              details={[
                "Sentence-Transformers model generates embeddings",
                "Each chunk becomes a vector in high-dimensional space",
                "Metadata is preserved for filtering capabilities"
              ]}
            />
            
            <WorkflowStep 
              number="4"
              title="Knowledge Base Storage"
              description="Vectors and metadata are stored in Qdrant"
              details={[
                "Vectors are indexed for efficient similarity search",
                "Metadata enables powerful filtering options",
                "Upsert operations ensure data is always up-to-date"
              ]}
            />
            
            <WorkflowStep 
              number="5"
              title="Assistant Query"
              description="AI assistant queries the knowledge base"
              details={[
                "User query is combined with recent conversation history",
                "Query is converted to embedding vector",
                "Semantic search finds relevant conversation chunks"
              ]}
            />
            
            <WorkflowStep 
              number="6"
              title="Response Generation"
              description="AI assistant generates response with context"
              details={[
                "Retrieved context is formatted for the assistant",
                "Context is included in the system prompt",
                "Assistant generates response informed by relevant conversations",
                "New conversation is logged back to knowledge base"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowStep({ number, title, description, details }) {
  return (
    <div className="relative pb-8">
      <div className="relative flex items-start space-x-3">
        <div className="relative">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
            <span className="text-white font-medium">{number}</span>
          </div>
          {number !== "6" && (
            <div className="absolute top-8 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div>
            <div className="text-md font-medium text-gray-900">
              {title}
            </div>
            <p className="text-sm text-gray-500">
              {description}
            </p>
          </div>
          <div className="mt-2 text-sm text-gray-700">
            <ul className="list-disc pl-5 space-y-1">
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeStructureTab() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900">Code Structure</h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Key modules and their responsibilities
        </p>
      </div>
      <div className="border-t border-gray-200">
        <div className="px-4 py-5 sm:px-6">
          <div className="space-y-6">
            <CodeModule
              name="conversation_processor.py"
              description="Processes raw conversation data into chunks"
              functions={[
                {
                  name: "load_json_conversations",
                  description: "Loads JSON conversation data from a file"
                },
                {
                  name: "preprocess_conversations",
                  description: "Normalizes and preprocesses conversation data"
                },
                {
                  name: "chunk_conversations",
                  description: "Splits conversations into chunks using sliding window"
                },
                {
                  name: "enrich_chunks",
                  description: "Adds metadata like topics to conversation chunks"
                }
              ]}
            />
            
            <CodeModule
              name="vector_db.py"
              description="Manages the vector database operations"
              functions={[
                {
                  name: "generate_embeddings",
                  description: "Converts text to vector embeddings"
                },
                {
                  name: "upsert_chunks",
                  description: "Inserts or updates chunks in the vector database"
                },
                {
                  name: "search",
                  description: "Performs semantic search with optional filters"
                }
              ]}
            />
            
            <CodeModule
              name="api.py"
              description="FastAPI endpoints for the knowledge base"
              functions={[
                {
                  name: "add_conversation",
                  description: "Endpoint to add a new conversation"
                },
                {
                  name: "get_update_status",
                  description: "Checks the status of a conversation update"
                },
                {
                  name: "search_conversations",
                  description: "Searches the conversation knowledge base"
                },
                {
                  name: "get_assistant_context",
                  description: "Gets formatted context for an assistant"
                }
              ]}
            />
            
            <CodeModule
              name="assistant.py"
              description="AI assistant integration with the knowledge base"
              functions={[
                {
                  name: "generate_response",
                  description: "Generates a response using the assistant with context"
                },
                {
                  name: "_get_relevant_context",
                  description: "Gets relevant context from the knowledge base"
                },
                {
                  name: "_log_conversation",
                  description: "Logs the conversation to the knowledge base"
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeModule({ name, description, functions }) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
      <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <code className="text-sm font-mono text-gray-900">{name}</code>
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-3">
        <ul className="space-y-2">
          {functions.map((func, index) => (
            <li key={index} className="text-sm">
              <code className="font-mono text-blue-600">{func.name}()</code>
              <span className="text-gray-600 ml-2">- {func.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;