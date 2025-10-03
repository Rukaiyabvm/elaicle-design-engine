import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper, Instagram } from "lucide-react";

const MediaPreview = () => {
  const mediaItems = [
    {
      type: "news",
      title: "Elaicle Transforms Urban Patrol with Electric Trikes",
      source: "Tech Innovation Today",
      image: "/lovable-uploads/324217eb-769d-4dfa-9923-943917241f1f.png",
      link: "/blogs",
      icon: Newspaper
    },
    {
      type: "instagram",
      title: "Behind the Scenes: Trike 2π Manufacturing",
      source: "@elaicle_official",
      image: "/lovable-uploads/2b4978cc-58d0-4d32-a48b-31287b49f662.png",
      link: "https://instagram.com/elaicle",
      icon: Instagram
    },
    {
      type: "blog",
      title: "The Future of Sustainable Micro-Mobility",
      source: "Elaicle Blog",
      image: "/lovable-uploads/55983431-0851-423d-ae41-574d661ebdce.png",
      link: "/blogs",
      icon: Newspaper
    }
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full body-small font-medium mb-6">
            MEDIA & INSIGHTS
          </div>
          <h2 className="heading-2 mb-8">
            Latest Updates from
            <span className="text-primary"> Elaicle</span>
          </h2>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest news, stories, and social media highlights.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mediaItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.type === "instagram" ? "_blank" : "_self"}
              rel={item.type === "instagram" ? "noopener noreferrer" : undefined}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover-scale"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="body-small text-primary font-medium mb-2">{item.source}</p>
                <h3 className="heading-4 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center text-primary">
                  <span className="body-small font-medium">Read more</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center fade-in">
          <Button variant="default" size="lg" asChild>
            <Link to="/blogs" className="flex items-center">
              View All Media
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaPreview;
