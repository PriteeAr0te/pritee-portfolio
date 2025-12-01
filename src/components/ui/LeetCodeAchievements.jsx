"use client"
import { useEffect, useState } from "react"
import { motion, easeOut } from 'framer-motion'
import Link from "next/link"

export default function LeetCodeAchievements() {
  const [badges, setBadges] = useState([])
  const [streak, setStreak] = useState(0)
  const [activeDays, setActiveDays] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/leetcode")
        const data = await res.json()
        setBadges(data.badges || [])
        setStreak(data.userCalendar.streak || 0)
        setActiveDays(data.userCalendar.totalActiveDays || 0)
      } catch (err) {
        console.error("LeetCode API Error:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const getBadgeIconUrl = (icon) => {
    if (!icon) return '/placeholder-badge.png';
    if (icon.startsWith('http')) return icon;
    return `https://leetcode.com${icon}`;
  };


  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section id="leetcode" className='py-16 overflow-x-hidden relative text-left'>
      <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent'></div>
      <div className='absolute -right-0 top-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl'></div>
      <div className='absolute -left-0 bottom-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl'></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Competitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Programming</span></h2>

          <div className="mt-4 h-1 w-40 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-900 dark:text-gray-300 max-w-2xl mx-auto">I challenge my logic every day through LeetCode — refining how I think, code, and solve problems that power real-world applications.</p>
        </motion.div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-stretch h-full justify-center">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group h-full">
              <div className="p-6 bg-emerald-50 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col
                      border-gray-700/50 group-hover:border-emerald-500/50 shadow-lg group-hover:shadow-xl shadow-black/20 group-hover:shadow-emerald-500/10 group-hover:translate-y-[-5px]">
                <p className="text-gray-900 dark:text-gray-300 text-sm font-semibold mb-3 uppercase tracking-wide">
                  Problems Solved
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <h3 className="text-6xl font-bold text-gray-900 dark:text-white">140</h3>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">/3730</span>
                </div>
                <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400 transition-all duration-500"
                    style={{ width: "4%" }}
                  ></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group h-full">
              <div className="p-6 bg-emerald-50 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col
                      border-gray-700/50 group-hover:border-emerald-500/50 shadow-lg group-hover:shadow-xl shadow-black/20 group-hover:shadow-emerald-500/10 group-hover:translate-y-[-5px]">
                <p className="text-gray-900 dark:text-gray-300 text-sm font-semibold mb-3 uppercase tracking-wide">
                  Current Streak
                </p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-6xl font-bold text-gray-900 dark:text-white">{loading ? "..." : streak}</h3>
                  <span className="text-cyan-400 text-lg font-semibold">Days 🔥</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group h-full">
              <div className="p-6 bg-emerald-50 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col
                      border-gray-700/50 group-hover:border-emerald-500/50 shadow-lg group-hover:shadow-xl shadow-black/20 group-hover:shadow-emerald-500/10 group-hover:translate-y-[-5px]">
                <p className="text-gray-900 dark:text-gray-300 text-sm font-semibold mb-3 uppercase tracking-wide">
                  Active Days
                </p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-6xl font-bold text-gray-900 dark:text-white">
                    {loading ? "..." : activeDays}
                  </h3>
                  <span className="text-gray-900 dark:text-gray-300 text-lg">Total</span>
                </div>
              </div>
            </motion.div>

          </div>

          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">Badges Earned</h3>
            </div>

            {loading ? (
              <div className="text-gray-300">Loading badges...</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center lg:gap-12">
                {badges.map((badge) => (
                  <motion.div
                    key={badge.id}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="group h-fit">
                    <div
                      className="bg-emerald-50 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col
                      border-gray-700/50 group-hover:border-emerald-500/50 shadow-lg group-hover:shadow-xl shadow-black/20 group-hover:shadow-emerald-500/10 group-hover:translate-y-[-5px]"
                    >
                      <div className="mb-4 p-6 w-full aspect-square bg-gradient-to-br from-gray-900 to-black rounded border border-gray-800 flex items-center justify-center overflow-hidden">
                        <img
                          src={getBadgeIconUrl(badge.icon)}
                          alt={badge.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => (e.target.src = '/fallback-badge.png')}
                        />
                      </div>
                      <h4 className="mb-3 text-gray-900 dark:text-white font-bold text-sm text-center">{badge.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}>
          <Link
            transition={{ duration: 1.1, ease: "easeOut" }}
            href="https://github.com/PriteeAr0te" target="_blank" rel="noopener noreferrer" className="group relative px-6 py-3 rounded-full font-medium items-center justify-center transition-all-duration-300 bg-emerald-100 dark:bg-gray-800/60 text-slate-900 dark:text-white backdrop-blur-sm border border-gray-700 hover:bg-gray-700/60 hover:border-emerald-500/30 shadow-lg hover:shadow-emerald-500/10 hover:translate-y-[-3px] inline-flex transition-transform duration-300">
            <span className="flex items-center">
              <span>View Full LeetCode Profile</span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
