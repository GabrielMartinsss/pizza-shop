type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

export interface OrderStatusProps {
  status: OrderStatus
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="size-2 rounded-full bg-slate-400" />
      )}
      {status === 'canceled' && (
        <span className="size-2 rounded-full bg-rose-400" />
      )}
      {status === 'processing' && (
        <span className="size-2 rounded-full bg-amber-400" />
      )}
      {status === 'delivering' && (
        <span className="size-2 rounded-full bg-sky-400" />
      )}
      {status === 'delivered' && (
        <span className="size-2 rounded-full bg-emerald-400" />
      )}

      <span className="font-medium capitalize text-muted-foreground">
        {status}
      </span>
    </div>
  )
}
