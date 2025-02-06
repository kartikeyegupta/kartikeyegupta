import React from 'react';

interface VSCodeWrapperProps {
  children: React.ReactNode;
}

export default function VSCodeWrapper({ children }: VSCodeWrapperProps) {
  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e]">
      {/* Title bar */}
      <div className="h-8 bg-[#323233] flex items-center justify-between px-4 text-white/60 text-sm">
        <div className="flex items-center gap-2">
          <div className="flex gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span>portfolio.tsx - Visual Studio Code</span>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Activity Bar */}
        <div className="w-12 bg-[#333333] flex flex-col items-center py-2 gap-4">
          <div className="text-white/40 hover:text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"/>
            </svg>
          </div>
          <div className="text-white/40 hover:text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z"/>
            </svg>
          </div>
          <div className="text-white/40 hover:text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"/>
            </svg>
          </div>
        </div>

        {/* Side Bar */}
        <div className="w-64 bg-[#252526] border-r border-[#1e1e1e]">
          <div className="p-2 text-sm text-white/80">
            <div className="uppercase tracking-wide mb-2 text-xs text-white/40 font-semibold">Explorer</div>
            <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-1 rounded">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M14.5 3H7.71l-.85-.85L6.51 2h-5l-.5.5v11l.5.5h13l.5-.5v-10L14.5 3zm-.51 8.49V13h-12V3h4.49l.35-.15.86-.86H14v1.5l-.01 8z"/>
              </svg>
              <span>portfolio</span>
            </div>
          </div>
        </div>

        {/* Main Editor */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="h-9 bg-[#2d2d2d] flex items-center px-4 text-white/40 text-sm border-b border-[#1e1e1e]">
            <div className="px-3 py-1 bg-[#1e1e1e] text-white/80 flex items-center gap-2">
              <span>portfolio.tsx</span>
              <button className="hover:bg-white/20 rounded-md">×</button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto">
            {children}
          </div>

          {/* Status Bar */}
          <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-2 text-xs">
            <div className="flex items-center gap-2">
              <span>🌿 main</span>
              <span>📡 0 ↓ 0 ↑</span>
            </div>
            <div className="flex items-center gap-4">
              <span>TypeScript React</span>
              <span>UTF-8</span>
              <span>LF</span>
              <span>Spaces: 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 