import Link from "next/link";
export default function Partners() {
  return (  
<section>
       <h2 className="text-[1.6rem] text-center font-semibold text-[var(--foreground)]">{`{ PARTNERS }`}</h2>
          <div className="crop">
            <div className="logo-container">
              <div className="flex logo-marquee h-48 flex items-center lg:gap-12 gap-2">
                <Link href="https://wanchanlin.webflow.io/work/rakuten" target="_blank" rel="noopener noreferrer">
                  <img className="companylogo h-48 object-contain" src="/images/rakuten.svg" alt="Rakuten" />
                </Link>
                <Link href="https://wanchanlin.webflow.io/work/spaceship" target="_blank" rel="noopener noreferrer">
                  <img className="companylogo h-48 object-contain" src="/images/spaceship.svg" alt="SpaceshipHK" />
                </Link>
                <Link href="https://wanchanlin.webflow.io/work/hongmall" target="_blank" rel="noopener noreferrer">
                  <img className="companylogo h-48 object-contain" src="/images/HongMall.svg" alt="HongMall" />
                </Link>
                <Link href="https://wanchanlin.webflow.io/work/heys" target="_blank" rel="noopener noreferrer">
                <img className="companylogo h-48 object-contain" src="/images/heys.svg" alt="Heys" />
                </Link>
                
                <Link href="https://wanchanlin.webflow.io/work/xingmobility" target="_blank" rel="noopener noreferrer">
                  <img className="companylogo h-48 object-contain"
                     src="/images/xingmobility.svg" alt="XingMobility" />
                </Link>

               
                
              </div>
            </div>
          </div>
</section>);
}