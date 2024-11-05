import React, { useEffect, useRef, useState } from "react"
import {
  Card,
  CardContent,
  Chip,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Badge,
  Tooltip,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import AddIcon from "@mui/icons-material/Add"
import CancelIcon from "@mui/icons-material/Cancel"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

const useContainerWidth = () => {
  const containerRef = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return

    const resizeObserver = new ResizeObserver(entries => {
      if (entries[0]) {
        setWidth(entries[0].contentRect.width)
      }
    })

    resizeObserver.observe(containerRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  return [containerRef, width]
}

const ChipSection = ({ title, items = [] }) => {
  const [containerRef, containerWidth] = useContainerWidth()
  const chipRefs = useRef([])
  const [visibleItems, setVisibleItems] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    if (!containerWidth || items.length === 0) return

    const calculateVisibleChips = () => {
      let totalWidth = 0
      const availableWidth = containerWidth - 32 // Account for padding and spacing
      const visibleChips = []
      let remaining = false

      for (let i = 0; i < chipRefs.current.length; i++) {
        const chip = chipRefs.current[i]
        if (!chip) continue

        const chipWidth = chip.offsetWidth + 8 // Add margin

        if (totalWidth + chipWidth < availableWidth) {
          visibleChips.push(items[i])
          totalWidth += chipWidth
        } else {
          remaining = true
          break
        }
      }

      setVisibleItems(visibleChips)
      setHasMore(remaining)
    }

    // Wait for next frame to ensure refs are populated
    requestAnimationFrame(calculateVisibleChips)
  }, [containerWidth, items])

  if (!items?.length) return null

  return (
    <div className="flex items-start space-x-2">
      <h3 className="text-sm font-semibold text-white/90 w-[30%] whitespace-nowrap">
        {title}:
      </h3>
      <div
        ref={containerRef}
        className="flex flex-wrap items-center gap-2 w-[70%]"
      >
        {items.map((item, index) => (
          <div
            key={`${title}-${index}`}
            ref={el => (chipRefs.current[index] = el)}
            className={index >= visibleItems.length ? "invisible absolute" : ""}
          >
            <Badge
              variant="secondary"
              className="bg-[#DFF2EB] text-[#3C3D37] hover:bg-white/30 whitespace-nowrap text-[0.8rem] font-semibold rounded-lg p-1.5 py-1"
              sx={{
                margin: 0,
                backgroundColor: "#DFF2EB",
                borderRadius: "0.6rem",
                color: "#3C3D37",
              }}
            >
              {item}
            </Badge>
          </div>
        ))}
        {hasMore && (
          <Badge
            variant="secondary"
            className="bg-[#DFF2EB] text-[#3C3D37] hover:bg-white/30 whitespace-nowrap text-[0.8rem] font-semibold rounded-lg p-1.5 py-1"
            sx={{
              margin: 0,
              backgroundColor: "#DFF2EB",
              borderRadius: "0.6rem",
              color: "#3C3D37",
            }}
          >
            ...
          </Badge>
        )}
      </div>
    </div>
  )
}

const ProfileCard = ({ userData, handleOpen }) => {
  const [data, setData] = useState(userData)

  return (
    <Card class="w-full overflow-hidden mt-2 mb-5 rounded-3xl">
      <div class="bg-gradient-to-r from-[#27468C] to-[#4780FF] text-white px-6 py-2">
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr,auto,1fr] gap-1 items-start">
            <div className="flex-row flex gap-3 align-middle items-center mb-4">
              <h2 className="text-3xl font-semibold">Hi, {data.name}</h2>
              <p className="flex-row flex gap-1">
                <p className="text-white text-sm font-thin">
                  - Summarizing your
                </p>
                <p className="text-white text-sm font-semibold">Requirements</p>
              </p>
            </div>
            <div className="hidden md:block w-px h-full bg-white/50 mx-6"></div>
            <ChipSection title="Your Skills" items={data.skills} />
            <div className="hidden md:block w-px h-full bg-white/50 mx-6"></div>
            <ChipSection title="Experience" items={data.experience} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr,auto,1fr] gap-1 items-start">
            <ChipSection title="Preferred Job" items={data.preferredJobs} />
            <div className="hidden md:block w-px h-full bg-white/50 mx-6"></div>
            <ChipSection
              title="Preferred Location"
              items={data.preferredLocations}
            />
            <div className="hidden md:block w-px h-full bg-white/50 mx-6"></div>
            <ChipSection
              title="Preferred Job Type"
              items={data.preferredJobType}
            />
            <div className="hidden md:block w-px h-full bg-white/50 mx-6"></div>
          </div>
          <Button
            color="white"
            onClick={handleOpen}
            className="w-full justify-center align-middle items-center h-[0.6px] pb-0"
          >
            <ArrowDropDownIcon />
          </Button>{" "}
        </CardContent>
      </div>
    </Card>
  )
}

export default ProfileCard
