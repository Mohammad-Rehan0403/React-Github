import React from 'react'

function card(props) {
    console.log(props);
  return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md rounded-full mx-auto" src="#" alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vel.
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {props.username}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        Staff Engineer, Algolia
                    </div>
                </figcaption>
            </div>
        </figure>
    </div>
  )
}

export default card