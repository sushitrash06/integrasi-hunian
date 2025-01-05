import React from 'react';

const ConstructionExperienceSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-red-600 mb-4">
          BERPENGALAMAN
        </h2>
        <p className="text-lg md:text-xl font-medium text-gray-800 mb-8">
          Bidang Konstruksi
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
          Segala kegiatan <span className="font-bold">konstruksi</span> haruslah dilakukan dengan
          teliti dan penuh konsentrasi serta pengalaman yang cukup dalam
          mengerjakannya. Jasa renovasi bangunan akan efektif jika seluruh
          bangunan disurvey terlebih dahulu, sama halnya dengan arsitek bangunan. Dengan pengalaman yang kami miliki, kami yakin dapat mengerjakan seluruh pekerjaan yang anda percayakan pada kami dengan baik.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            'Renovasi Rumah',
            'Remodeling',
            'Renovasi Kamar Mandi',
            'Interior Maintenance',
            'Plumbing',
            'Drywall Repair / Install',
            'Flooring',
            'Electrical Services',
            'Arsitektur',
          ].map((service, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm md:text-base shadow-sm"
            >
              {service}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            { value: '10', label: 'Project In Complete' },
            { value: '6', label: 'Project In Progress' },
            { value: '16', label: 'Total Project' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionExperienceSection;
