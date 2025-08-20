import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  UserCheck, 
  UserX, 
  Shield,
  User,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

// Mock user data
const mockUsers = [
  {
    id: 1,
    username: "john.doe",
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: "+1 234 5678",
    location: "New York, NY",
    role: "Admin",
    status: "active",
    avatar: "https://avatars.githubusercontent.com/u/99732661",
    joinedDate: "2025.01.01",
    lastActive: "2 hours ago",
    transactions: 24,
  },
  {
    id: 2,
    username: "jane.smith",
    name: "Jane Smith", 
    email: "jane.smith@gmail.com",
    phone: "+1 234 5679",
    location: "Los Angeles, CA",
    role: "User",
    status: "active",
    avatar: "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=400",
    joinedDate: "2024.12.15",
    lastActive: "1 day ago",
    transactions: 18,
  },
  {
    id: 3,
    username: "michael.johnson",
    name: "Michael Johnson",
    email: "michael.johnson@gmail.com", 
    phone: "+1 234 5680",
    location: "Chicago, IL",
    role: "Moderator",
    status: "active",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
    joinedDate: "2024.11.20",
    lastActive: "5 minutes ago",
    transactions: 31,
  },
  {
    id: 4,
    username: "lily.adams",
    name: "Lily Adams",
    email: "lily.adams@gmail.com",
    phone: "+1 234 5681", 
    location: "Miami, FL",
    role: "User",
    status: "inactive",
    avatar: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400",
    joinedDate: "2024.10.05",
    lastActive: "1 week ago",
    transactions: 12,
  },
  {
    id: 5,
    username: "sam.brown",
    name: "Sam Brown",
    email: "sam.brown@gmail.com",
    phone: "+1 234 5682",
    location: "Seattle, WA", 
    role: "User",
    status: "active",
    avatar: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=400",
    joinedDate: "2024.09.12",
    lastActive: "3 hours ago",
    transactions: 8,
  },
  {
    id: 6,
    username: "emma.wilson",
    name: "Emma Wilson",
    email: "emma.wilson@gmail.com",
    phone: "+1 234 5683",
    location: "Austin, TX",
    role: "User", 
    status: "active",
    avatar: "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=400",
    joinedDate: "2024.08.30",
    lastActive: "30 minutes ago",
    transactions: 15,
  },
];

const getRoleBadgeVariant = (role: string) => {
  switch (role) {
    case "Admin":
      return "destructive";
    case "Moderator":
      return "default";
    default:
      return "secondary";
  }
};

const getStatusBadgeVariant = (status: string) => {
  return status === "active" ? "default" : "secondary";
};

const getRoleIcon = (role: string) => {
  switch (role) {
    case "Admin":
      return <Shield className="w-4 h-4" />;
    case "Moderator":
      return <UserCheck className="w-4 h-4" />;
    default:
      return <User className="w-4 h-4" />;
  }
};

export default function UsersPage() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Users</h1>
          <p className="text-sm text-muted-foreground">
            Manage and view all users in your system
          </p>
        </div>
        <Button>Add New User</Button>
      </div>

      {/* Filters Section */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              className="pl-10"
            />
          </div>
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="moderator">Moderator</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {mockUsers.map((user) => (
          <Card key={user.id} className="bg-primary-foreground hover:bg-primary-foreground/80 transition-colors">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={user.avatar} alt={user.name} className="object-cover" />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-medium">{user.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">@{user.username}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/users/${user.username}`}>
                        View Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Edit User</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Delete User
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Role and Status */}
              <div className="flex items-center gap-2">
                <Badge variant={getRoleBadgeVariant(user.role)} className="flex items-center gap-1">
                  {getRoleIcon(user.role)}
                  {user.role}
                </Badge>
                <Badge variant={getStatusBadgeVariant(user.status)}>
                  {user.status === "active" ? (
                    <UserCheck className="w-3 h-3 mr-1" />
                  ) : (
                    <UserX className="w-3 h-3 mr-1" />
                  )}
                  {user.status}
                </Badge>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{user.location}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between pt-2 border-t">
                <div className="text-center">
                  <p className="text-lg font-semibold">{user.transactions}</p>
                  <p className="text-xs text-muted-foreground">Transactions</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">{user.lastActive}</p>
                  <p className="text-xs text-muted-foreground">Last Active</p>
                </div>
              </div>

              {/* Action Button */}
              <Link href={`/users/${user.username}`} className="w-full">
                <Button variant="outline" className="w-full mt-4">
                  View Profile
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination or Load More */}
      <div className="flex justify-center">
        <Button variant="outline">Load More Users</Button>
      </div>
    </div>
  );
}