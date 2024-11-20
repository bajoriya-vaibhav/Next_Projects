import Link from "next/link";
import {auth} from "@/auth";
import { CiSearch } from "react-icons/ci";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Avatar, Button } from "@nextui-org/react";

import { signIn, signOut } from "@/action";

export default async function NavbarComponent() {
    const session = await auth();
    return (
            <Navbar shouldHideOnScroll>
            <NavbarBrand >
                <Link href="/" className="font-bold">
                    RedditClone
                </Link>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Input isClearable size="sm" placeholder="Search..." radius="md" startContent={<CiSearch className="text-zinc-500" size={16} />}/>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    {session?.user?.image? (
                        <div className="flex gap-4"><Avatar src={session.user.image} size="sm"/>
                        <form action={signOut}>
                            <Button type="submit">
                                Sign Out
                            </Button>
                        </form>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                        <form action={signIn}>
                            <Button type="submit">
                                Sign In
                            </Button>
                        </form>
                        <form action={signOut}>
                            <Button type="submit">
                                Sign Out
                            </Button>
                        </form>
                        </div>
                    )}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}