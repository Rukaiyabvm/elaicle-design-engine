import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const News = () => {
  const articles = [
    {
      id: 1,
      title: "Elaicle Partners with Coimbatore Police for Sustainable Patrol Operations",
      excerpt: "Our Trike 2π is now being used by the Coimbatore City Police for efficient urban patrolling, marking a significant milestone in sustainable law enforcement.",
      date: "March 15, 2024",
      author: "Elaicle Team",
      category: "Partnership",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Revolutionary Battery Technology: 3-Year Lifecycle Achievement",
      excerpt: "Our advanced energy storage solutions have achieved a breakthrough 3-year battery lifecycle, setting new standards in the micro-mobility industry.",
      date: "February 28, 2024",
      author: "R&D Team",
      category: "Technology",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Sustainability Milestone: 50 Tonnes of CO₂ Emissions Reduced",
      excerpt: "Elaicle's electric mobility solutions have successfully reduced carbon emissions by over 50 tonnes, contributing significantly to environmental conservation.",
      date: "February 10, 2024",
      author: "Sustainability Team",
      category: "Environmental",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-spacing bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center text-primary-foreground">
            <h1 className="heading-1 mb-8">Latest News & Updates</h1>
            <p className="body-large max-w-2xl mx-auto opacity-90">
              Stay updated with Elaicle's journey towards sustainable mobility and our latest innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover-scale overflow-hidden">
                <div className="aspect-video bg-muted"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                    {article.category}
                  </div>
                  
                  <h2 className="heading-4 mb-4 leading-tight">{article.title}</h2>
                  <p className="body-regular text-muted-foreground mb-6">{article.excerpt}</p>
                  
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/news/${article.id}`} className="flex items-center">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;