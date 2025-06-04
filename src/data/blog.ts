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
    }
]

export default posts
