'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return <Switch {...label} />;

  const handleChange = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <FiSun size={24} style={{ marginRight: '0.5rem' }} />
      <Switch
        checked={resolvedTheme === 'dark'}
        onChange={handleChange}
        {...label}
      />
        <FiMoon size={24} style={{ marginRight: '0.5rem' }} />
    </div>
  );

}