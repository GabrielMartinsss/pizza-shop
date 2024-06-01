import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerRestaurant } from '@/api/register-restaurant'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const singUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SingUpForm = z.infer<typeof singUpForm>

export function SingUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SingUpForm>({
    resolver: zodResolver(singUpForm),
  })

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  })

  async function handleSingUp({
    restaurantName,
    managerName,
    email,
    phone,
  }: SingUpForm) {
    try {
      await registerRestaurantFn({
        restaurantName,
        managerName,
        email,
        phone,
      })

      toast.success('Restaurant has been register successfully!', {
        action: {
          label: 'make login',
          onClick: () => navigate(`/sign-in?email=${email}`),
        },
      })
    } catch {
      toast.error('Something wrong happened!')
    }
  }

  return (
    <>
      <Helmet title="Sign-Up" />

      <div className="p-8">
        <Button asChild variant="ghost" className="absolute right-8 top-8">
          <Link to="/sign-in" className="">
            Make login
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create free account
            </h1>
            <p className="text-sm text-muted-foreground">
              Be a partner and start your sales!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSingUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Establishment name</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Your name</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Your e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Your phone</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              Register
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              By continuing, you agree to our{' '}
              <a href="#" className="underline underline-offset-2">
                terms of service
              </a>{' '}
              and{' '}
              <a href="#" className="underline underline-offset-2">
                Privacy Policies
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
