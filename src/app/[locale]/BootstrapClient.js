'use client';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null; // this component just runs the import
}
