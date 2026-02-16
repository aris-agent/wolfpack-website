import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';
import { LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import { 
  Zap, ArrowRight, ChevronDown, CheckCircle2, Bot, Smartphone, 
  LayoutGrid, Star, Handshake, Lightbulb, Users2, Calendar,
  User, Mail, MessageSquare, Send, Clock, Award, Twitter,
  Github, Linkedin, ArrowLeft, Cpu, Sparkles, Globe, Code,
  Cloud, ShieldCheck, RefreshCw, MapPin, Phone, Brain, Repeat,
  Rocket, Trophy, Layers, Workflow, Microscope, Target
} from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideMarkdown(),
    {
      provide: LUCIDE_ICONS,
      useValue: new LucideIconProvider({
        Zap,
        ArrowRight,
        ChevronDown,
        CheckCircle2,
        Bot,
        Smartphone,
        LayoutGrid,
        Star,
        Handshake,
        Lightbulb,
        Users2,
        Calendar,
        User,
        Mail,
        MessageSquare,
        Send,
        Clock,
        Award,
        Twitter,
        Github,
        Linkedin,
        ArrowLeft,
        Cpu,
        Sparkles,
        Globe,
        Code,
        Cloud,
        ShieldCheck,
        RefreshCw,
        MapPin,
        Phone,
        Brain,
        Repeat,
        Rocket,
        Trophy,
        Layers,
        Workflow,
        Microscope,
        Target
      })
    }
  ]
};
