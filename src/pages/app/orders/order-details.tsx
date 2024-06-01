import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order: 98ascnx9f80fas</DialogTitle>
        <DialogDescription>Order details</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pending
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Client</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">Gabriel Martins</div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Phone</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">(11) 1923931912</div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  gabriel@example.com
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Accomplished
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">15 minutes ago</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Pizza Pepperoni</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">$ 69,90</TableCell>
              <TableCell className="text-right">$ 139,80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Mussarela</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">$ 59,90</TableCell>
              <TableCell className="text-right">$ 119,80</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total order</TableCell>
              <TableCell className="text-right font-medium">$ 259,60</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
