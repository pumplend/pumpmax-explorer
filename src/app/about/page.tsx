import { CloudArrowUpIcon, ServerIcon } from '@heroicons/react/20/solid'
import { IconBrandTailwind,IconBrandGithub,IconBrandTwitter,IconBrandTelegram,IconBrandDiscord,IconNote } from '@tabler/icons-react'

export default function Example() {
  return (
    <div className="relative">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">About Pumpmax Explorer</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-100">
                <strong>Pumpmax Explorer</strong> is a transaction explorer of <a> Pumpmax protocol</a> . You can search all the Transactions and positions here . Also able to see all the hisotry positions active history .
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 dark:bg-gray-100 shadow-xl dark:shadow-2xl ring-1 ring-gray-400/10 dark:ring-gray-100/10 sm:w-[57rem]"
            src="/application.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 dark:text-gray-100 lg:max-w-lg">
              <p>
              Pump.fun, one of the most successful products on Solana, sees daily trading volumes in the hundreds of millions, thousands of new coin launches, and hundreds of thousands of active addresses. While many trading tools have emerged around Pump.fun, we found a lack of financial tools—especially basic lending products.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600 dark:text-gray-300">
                <li className="flex gap-x-3">
                  {/* <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-sky-600 dark:text-sky-300" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-gray-200">Max Buy : </strong> 
                     Deposit SOL and instantly see the maximum amount of memecoins you can purchase, without manually adjusting leverage or complex parameters.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <IconBrandTailwind className="mt-1 h-5 w-5 flex-none text-sky-600 dark:text-sky-300" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-gray-200">Max Borrow : </strong> Easily access additional funds to capitalize on market opportunities, all through a streamlined borrowing process.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <ServerIcon className="mt-1 h-5 w-5 flex-none text-sky-600 dark:text-sky-300" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-gray-200"> Earn SOL : </strong> Put your assets to work through a simple, low-friction staking mechanism, allowing you to earn passive returns.
                  </span>
                </li>
              </ul>

              <p className="mt-6">
                Join us : <br/>
                <div style={{display:'flex'}}>
                  <a href='https://github.com/pumplend'>
                    <IconBrandGithub></IconBrandGithub>
                  </a>
                  <a href='https://x.com/pumpmaxfun'>
                    <IconBrandTwitter></IconBrandTwitter>
                  </a>
                  <a href='https://t.me/+50XGEOayi543NzM1'>
                    <IconBrandTelegram></IconBrandTelegram>
                  </a>
                  <a href='https://discord.gg/X6BdtCRM3W'>
                    <IconBrandDiscord></IconBrandDiscord>
                  </a>
                  <a href='https://docs.pumpmax.fun/'>
                    <IconNote></IconNote>
                  </a>
                </div>

              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
