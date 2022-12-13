import { template } from "lodash"
import React from 'react'

const template = () => {
  return (
    <section className="px-3 py-5 bg-neutral-100 lg:py-10">

<div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">

    <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
       
        <p className="w-full text-center mb-3 text-4xl font-bold md:text-5xl text-primary"> Migrate Sensitive Data</p>
        <p className="text-slate-500 mb-8 max-w-[480px] text-base"> An important part of choosing 'Your Cloud' platform is ensuring your data is migrated and synchronized making the transition to the cloud effective. Businesses are migrating to the cloud to reduce management overhead and increase the agility and speed with which they can run their businesses. These specialized workloads often require certified hardware and complicate licensing and support agreements. This solution provides a path to modernize your application infrastructure landscape, while maintaining your existing investments and architecture.</p>
        <button className="w-full rounded-md bg-primary px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-primary duration-200 sm:w-auto">Share Project</button>
    </div>
    <div className="order-1 lg:order-2">
        <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="https://www.nixsolutions.com/uploads/2021/01/iStock-1213962499-scaled.jpg" alt="" />
    </div>

</div>
    </section>
  )
}

export default template;