import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const FINEPAYMENTSTATUS = {
    PENDING: 'TERTUNDA',
    SUCCESS: 'SUKSES',
    FAILED: 'GAGAL',
};

export function flashMessage(params) {
    return params.props.flash_message;
}

export const formatToRupiah = (amount) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    return formatter.format(amount);
};

export const messages = {
    503: {
        title: 'Service Unvailable',
        description: 'Sorry, We are doing some maintenance, Please Check back soon',
        status: '503',
    },
    500: {
        title: 'Server Error',
        description: 'Opps.. somethink went wrong on our server',
        status: '500',
    },
    404: {
        title: 'Not Found',
        description: 'Sorry, the page you are looking for could not be found',
        status: '404',
    },
    403: {
        title: 'Forbidden',
        description: 'Sorry, you are forbidden from accesing this page',
        status: '403',
    },
    401: {
        title: 'Unauthorized',
        description: 'Sorry, you are unauthorized to accesing this page',
        status: '401',
    },
    429: {
        title: 'To Many request',
        description: 'pelase, try again in in just a second',
        status: '429',
    },
};
