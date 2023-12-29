import Link from "next/link";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href='/' className="flex items-center gap-4">
        
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src='/assets/logout.svg'
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher 
          appearance={{
            elements: {
              organizationSwitcherTrigger: 'py-2 px-4'
            }
          }}
        />
      </div>
    </nav>  
  )
}

export default Topbar;