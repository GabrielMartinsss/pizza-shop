import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="size-4" />
              <span className="sr-only">Order details</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        98ascnx9f80fas
      </TableCell>
      <TableCell className="text-muted-foreground">15 minutes ago</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pending</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Gabriel Silva Martins</TableCell>
      <TableCell className="font-medium">$ 149,90</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 size-3" />
          Aprove
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 size-3" />
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  )
}
