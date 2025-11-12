import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PDFExport = ({ targetRef, fileName = "export.pdf" }) => {
    const handleExportPDF = async () => {
        if (!targetRef?.current) {
            console.error("❌ targetRef belum diatur atau tidak ditemukan.");
            return;
        }

        const element = targetRef.current;
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            backgroundColor: "#fff",
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        // jika konten tinggi melebihi 1 halaman
        let heightLeft = pdfHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();

        while (heightLeft > 0) {
            position = heightLeft - pdfHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
            heightLeft -= pdf.internal.pageSize.getHeight();
        }

        pdf.save(fileName);
    };

    return (
        <button
            onClick={handleExportPDF}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-3 rounded-lg w-full"
        >
            📄 Export to PDF
        </button>
    );
};

export default PDFExport;
