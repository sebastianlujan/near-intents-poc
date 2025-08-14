interface TabToggleProps {
  activeTab: 'buyer' | 'seller'
  setActiveTab: (tab: 'buyer' | 'seller') => void
}

interface TabButtonProps {
  isActive: boolean
  onClick: () => void
  label: string
}

interface CTAButtonProps {
  activeTab: 'buyer' | 'seller'
}

interface HighlightedTextProps {
  children: React.ReactNode
}

interface MainContentProps {
  activeTab: 'buyer' | 'seller'
  setActiveTab: (tab: 'buyer' | 'seller') => void
}
