using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ReactAPI.Models
{
    public partial class T2004E_ReactProjectContext : DbContext
    {
        public T2004E_ReactProjectContext(DbContextOptions<T2004E_ReactProjectContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Campaign> Campaigns { get; set; }
        public virtual DbSet<CampaignComment> CampaignComments { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<ConnectedBrand> ConnectedBrands { get; set; }
        public virtual DbSet<Event> Events { get; set; }
        public virtual DbSet<EventComment> EventComments { get; set; }
        public virtual DbSet<Recipe> Recipes { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Campaign>(entity =>
            {
                entity.Property(e => e.Content).IsRequired();

                entity.Property(e => e.Description).IsRequired();

                entity.Property(e => e.EndDate).HasColumnType("datetime");

                entity.Property(e => e.Sponsor).IsRequired();

                entity.Property(e => e.StartDate).HasColumnType("datetime");

                entity.Property(e => e.Title).IsRequired();
            });

            modelBuilder.Entity<CampaignComment>(entity =>
            {
                entity.HasIndex(e => new { e.CampaignId, e.UserId }, "UK_100")
                    .IsUnique();

                entity.HasIndex(e => e.CampaignId, "fkIdx_75");

                entity.HasIndex(e => e.UserId, "fkIdx_78");

                entity.Property(e => e.CampaignId).HasColumnName("CampaignID");

                entity.Property(e => e.Comment).IsRequired();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Campaign)
                    .WithMany(p => p.CampaignComments)
                    .HasForeignKey(d => d.CampaignId)
                    .HasConstraintName("FK_74");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CampaignComments)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_77");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<ConnectedBrand>(entity =>
            {
                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<Event>(entity =>
            {
                entity.Property(e => e.Content).IsRequired();

                entity.Property(e => e.Description).IsRequired();

                entity.Property(e => e.EndDate).HasColumnType("datetime");

                entity.Property(e => e.Location).IsRequired();

                entity.Property(e => e.Organizer).IsRequired();

                entity.Property(e => e.StartDate).HasColumnType("datetime");

                entity.Property(e => e.Title).IsRequired();
            });

            modelBuilder.Entity<EventComment>(entity =>
            {
                entity.HasIndex(e => new { e.UserId, e.EventId }, "UK_101")
                    .IsUnique();

                entity.HasIndex(e => e.UserId, "fkIdx_63");

                entity.HasIndex(e => e.EventId, "fkIdx_66");

                entity.Property(e => e.Comment).IsRequired();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.EventId).HasColumnName("EventID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Event)
                    .WithMany(p => p.EventComments)
                    .HasForeignKey(d => d.EventId)
                    .HasConstraintName("FK_62");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.EventComments)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_65");
            });

            modelBuilder.Entity<Recipe>(entity =>
            {
                entity.HasIndex(e => e.CategoryId, "fkIdx_48");

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.Description).IsRequired();

                entity.Property(e => e.Ingredients).IsRequired();

                entity.Property(e => e.Title).IsRequired();

                entity.Property(e => e.Tools).IsRequired();

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Recipes)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK_47");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Email).IsRequired();

                entity.Property(e => e.FullName).IsRequired();

                entity.Property(e => e.Password).IsRequired();

                entity.Property(e => e.Role).IsRequired();
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
