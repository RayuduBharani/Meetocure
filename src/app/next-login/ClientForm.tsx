'use client'

import React, { memo, useActionState, useEffect, useCallback } from 'react'
import { Label } from '@/components/ui/label'
import { Phone } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { sendVerificationCode } from '@/actions/sendVerificationCode'
import { useFormStatus } from 'react-dom'

type Role = "ADMIN" | "DOCTOR" | "PATIENT"

// Memoized SubmitButton
const SubmitButton = memo(() => {
  const { pending } = useFormStatus()
  return (
    <Button
      className="h-[2.8rem] rounded-full my-3 bg-primary text-primary-foreground"
      type="submit"
      disabled={pending}
    >
      {pending ? 'Sending...' : 'Send Code'}
    </Button>
  )
})
SubmitButton.displayName = 'SubmitButton'

// Memoized PhoneIcon to prevent recreation
const PhoneIcon = memo(() => (
  <Phone className="absolute left-3 h-5 w-5 text-muted-foreground" />
))
PhoneIcon.displayName = 'PhoneIcon'

interface ClientFormProps {
  role: Role
}

const ClientForm = memo(({ role }: ClientFormProps) => {
  const router = useRouter()
  const [state, formAction] = useActionState(sendVerificationCode, {
    success: false,
    message: '',
    redirectTo: '',
  })

  // Memoize handleSuccess with stable dependencies
  const handleSuccess = useCallback(
    (message: string, redirectTo: string) => {
      toast.success(message)
      router.replace(redirectTo)
    },
    [router] // router is stable in Next.js
  )

  // Optimize useEffect by checking specific state properties
  useEffect(() => {
    if (state.success === false && state.message) {
      toast.error(state.message)
    } else if (state.success === true && state.redirectTo) {
      handleSuccess(state.message, state.redirectTo)
    }
  }, [state.success, state.message, state.redirectTo, handleSuccess])

  return (
    <form className="flex flex-col gap-2" action={formAction}>
      <Label 
        className="text-sm text-muted-foreground" 
        htmlFor="mobile-number"
      >
        Mobile Number
      </Label>
      <div className="relative flex items-center">
        <PhoneIcon />
        <Input
          className="border-muted-foreground text-sm placeholder:text-sm placeholder:text-muted-foreground h-[2.8rem] pl-10"
          id="mobile-number"
          name="mobile-number"
          placeholder="Enter your Mobile Number"
          maxLength={10}
          type="tel"
          required
          pattern="[0-9]{10}"
          autoComplete="tel"
        />
      </div>
      <input type="hidden" readOnly name="role" value={role} />
      <SubmitButton />
    </form>
  )
})
ClientForm.displayName = 'ClientForm'

export default ClientForm