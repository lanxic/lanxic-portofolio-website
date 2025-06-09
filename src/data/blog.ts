import {BlogPostProps} from "@/lib/types";

const posts: BlogPostProps[] = [
    {
        slug: 'mengenal-docker-dan-teknologi-container',
        title: 'Mengenal Docker dan Teknologi Container',
        summary: 'Docker is a lightweight container platform that simplifies application development and deployment by packaging apps with their dependencies. It enables developers and sysadmins to build, ship, and run applications faster and more efficiently across various environments.',
        date: '2019-11-18',
        tags: ['bash', 'scripting', 'virtualization', 'linux', 'container']
    },
    {
        slug: 'elasticsearch-backup-and-restore-using-snapshot',
        title: 'Elasticsearch Backup and Restore using Snapshot',
        summary: 'A practical guide to backing up and restoring Elasticsearch using snapshot functionality, integrated with AWS S3 for remote storage. This document is designed for system administrators managing Elasticsearch infrastructure.',
        date: '2024-02-23',
        tags: ['javascript', 'web development', 'programming', 'frontend']
    },
    {
        slug: 'angularjs-website-indexed-by-seo-engine',
        title: 'AngularJS website indexed by SEO engine (faceboook bot, twitter bot, etc)',
        summary: 'Learn how to make your AngularJS application SEO-friendly by replacing hashbang URLs with pretty HTML5 URLs, improving crawlability and user experience through proper configuration.',
        date: '2017-02-23',
        tags: ['angularjs', 'javascript', 'frontend', 'web development']
    },
    {
        slug: 'how-to-use-ssh-forwarding-ansible',
        title: 'How to use ssh forwarding on Ansible',
        summary: 'Ansible is an open-source automation engine that automates cloud provisioning, configuration management, and application deployment. Once installed on a control node, Ansible, which is an agentless architecture, connects to a managed node through the default OpenSSH connection type.',
        date: '2025-04-18',
        tags: ['git', 'ansible', 'ssh', 'automation', 'devops']
    },
    {
        slug: 'cukupkah-membeli-kebahagiaan-dengan-segepok-uang',
        title: 'Cukupkah Membeli Kebahagiaan dengan Segepok Uang?',
        summary: 'Papa, aku mau ajak Papa main ular tangga... cuma tiga puluh menit aja. Mama bilang waktu Papa sangat berharga, jadi aku mau bayar pakai tabunganku...',
        date: '2011-01-25',
        tags: ['public']
    },
    {
        slug: 'perpisahan-bukan-akhir-tapi-awal-langkah-baru',
        title: 'Perpisahan Bukan Akhir, Tapi Awal Langkah Baru',
        summary: 'Tak terasa, di penghujung perpisahan bersama PT. PAS setelah lima tahun perjalanan penuh makna, kini saatnya saya melangkah untuk mengejar cita-cita menjadi profesional di bidang IT.',
        date: '2010-11-26',
        tags: ['public']
    },
    {
        slug: 'langkah-mudah-replikasi-master-slave-di-mysql-dengan-docker',
        title: 'Langkah Mudah Replikasi Master-Slave di MySQL dengan Docker',
        summary: 'Master-Slave Replication adalah metode replikasi database yang memungkinkan satu server (master) mengontrol replikasi data ke satu atau lebih server lainnya (slave). Dengan konfigurasi ini, proses read dapat dibebankan ke slave, sehingga mengurangi beban kerja di server master.',
        date: '2017-01-20',
        tags: ['mysql', 'docker']
    },
    {
        slug: 'elasticsearch-backup-and-restore',
        title: 'Elasticsearch Backup and restore',
        summary: 'Artikel ini menjelaskan cara melakukan backup dan restore data pada Elasticsearch menggunakan fitur snapshot. Panduan ini mencakup instalasi Python 2.7, pemasangan paket pendukung, serta contoh penggunaan script untuk melakukan backup dan restore data Elasticsearch dengan penyimpanan di S3 Bucket.',
        date: '2017-02-23',
        tags: ['elasticsearch', 'bash', 'scripting']
    },
    {
        slug: 'panduan-instalasi-dan-pengelolaan-lxc-container-di-linux',
        title: 'Panduan Instalasi dan Pengelolaan LXC Container di Linux',
        summary: 'Dokumen teknis ini menjelaskan cara instalasi dan konfigurasi LXC container di Linux, mulai dari pemasangan paket, pengunduhan image container, hingga menjalankan dan mengelola container dengan perintah dasar LXC.',
        date: '2017-03-30',
        tags: ['lxc', 'bash', 'linux container']
    },

]

export default posts
