import SpecialtySidebar from '../specialty-sidebar'
import SpecialtySlidingSidebar from '../specialty-sliding-sidebar'
import { Check } from 'lucide-react'

interface Service {
  title: string
  description: string
}

interface SpecialtyContentProps {
  description: string
  services: Service[]
  currentSlug: string
}

export const SpecialtyContent = ({ description, services, currentSlug }: SpecialtyContentProps) => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:hidden">
          <SpecialtySlidingSidebar currentSlug={currentSlug} />
        </div>

        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="space-y-12">
              <div>
                <h2 className="font-heading text-primary mb-6 text-2xl font-bold lg:text-3xl">
                  Resumen
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral text-base leading-relaxed">{description}</p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-primary mb-6 text-2xl font-bold lg:text-3xl">
                  Servicios
                </h2>
                <div className="space-y-8">
                  {services.map((service, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0">
                          <div className="bg-primary group-hover:bg-primary/80 flex size-5 items-center justify-center transition-colors">
                            <Check className="size-3 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading text-primary mb-1 text-lg font-bold">
                            {service.title}
                          </h3>
                          <p className="text-neutral text-base leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <SpecialtySidebar currentSlug={currentSlug} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialtyContent
