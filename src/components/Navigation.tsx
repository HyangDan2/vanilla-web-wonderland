import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Menu, X, Book, Palette, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HTML", href: "/html", icon: Book, variant: "html" as const, isRoute: true },
    { name: "CSS", href: "/css", icon: Palette, variant: "css" as const, isRoute: true },
    { name: "JavaScript", href: "/javascript", icon: Zap, variant: "js" as const, isRoute: true },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="p-2 bg-gradient-code rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">WebDev 입문</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </a>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              로그인
            </Button>
            <Button size="sm">
              무료 시작
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-3">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </a>
                )
              ))}
              
              <div className="flex flex-col gap-2 px-4 pt-4 border-t border-border">
                <Button variant="outline" size="sm">
                  로그인
                </Button>
                <Button size="sm">
                  무료 시작
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}