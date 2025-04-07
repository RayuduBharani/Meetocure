'use client'

import { useActionState, useEffect, useCallback } from 'react'
import { sendVerificationCode } from '@/actions/sendVerificationCode'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import React, { memo } from 'react'

type Role = 'ADMIN' | 'DOCTOR' | 'PATIENT'

interface ResendOtpProps {
  phone: string
  role: Role
}

// Memoized Button component
const ResendButton = memo(() => (
  <Button
    type="submit"
    variant="link"
    className="text-xs text-primary"
  >
    Resend OTP
  </Button>
))
ResendButton.displayName = 'ResendButton'

const ResendOtp = memo(({ phone, role }: ResendOtpProps) => {
  const [state, formAction] = useActionState(sendVerificationCode, {
    success: false,
    message: '',
    redirectTo: '',
  })

  const handleToast = useCallback(() => {
    if (state.success === false && state.message) {
      toast.error(state.message)
    } else if (state.success === true) {
      toast.success(state.message || 'OTP resent successfully')
    }
  }, [state.success, state.message])

  useEffect(() => {
    if (state.success !== null && state.message !== '') {
      handleToast()
    }
  }, [state.success, state.message, handleToast])

  return (
    <form action={formAction}>
      <input type="hidden" name="mobile-number" value={phone} />
      <input type="hidden" name="role" value={role} />
      <ResendButton />
    </form>
  )
})
ResendOtp.displayName = 'ResendOtp'

export default ResendOtp