import React from "react";
import "./ExperiencePiece.css";

const ExperiencePiece = ({ experience }) => {
  // 抓取 experience 內所有 prefix + number 的欄位（例如 peojectName1, peojectName2...）
  const pickNumberedFields = (obj, prefix) => {
    return Object.entries(obj)
      .filter(([key, value]) => key.startsWith(prefix) && value) // 過濾空值
      .sort((a, b) => {
        const an = Number(a[0].slice(prefix.length)) || 0;
        const bn = Number(b[0].slice(prefix.length)) || 0;
        return an - bn;
      })
      .map(([, value]) => value);
  };

  const projectNames = pickNumberedFields(experience, "peojectName");
  const descriptions = pickNumberedFields(experience, "description");

  // 將 projectName 與 description 依序配對
  const projects = projectNames.map((name, idx) => ({
    name,
    description: descriptions[idx] || "",
  }));

  return (
    <div className="experience-piece">
      {/* 第一列：公司/年份 與 職位 對齊 */}
      <div className="meta-row">
        <div className="left-meta">
          <p className="company">{experience.company}</p>
          <p className="year">{experience.year}</p>
        </div>

        <div className="right-meta">
          <p className="position">{experience.position}</p>
        </div>
      </div>

      {/* 專案列：projectNameN 與 descriptionN 首行對齊 */}
      {projects.map((p, idx) => (
        <div className="project-row" key={`${experience.id || "exp"}-${idx}`}>
          <p className="project-name">{p.name}</p>

          {/* 若 description 是空的就不渲染（避免多一行空白） */}
          {p.description ? (
            <p
              className="project-description"
              dangerouslySetInnerHTML={{ __html: p.description }}
            />
          ) : (
            <div />
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperiencePiece;
