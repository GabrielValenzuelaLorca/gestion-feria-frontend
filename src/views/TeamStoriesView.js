import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  createContext,
} from "react";
import BoardInfo from "../components/Stories/BoardInfo";
import Board from "../components/Stories/Board";
import useFetch from "../hooks/useFetch";
import { getStoriesBySprint } from "../services/story";
import { useParams } from "react-router-dom";
import { getTeam } from "../services/team";
import Loader from "../components/Loader";

export const teamContext = createContext();

const TeamStoriesView = () => {
  const [storiesState, setStories] = useState([]);
  const [teamState, setTeam] = useState({});
  const [filterState, setFilter] = useState("Backlog");
  const [fetchStories, loadingStories] = useFetch(
    getStoriesBySprint,
    setStories
  );
  const [fetchTeam] = useFetch(getTeam, setTeam);
  const { teamId } = useParams();

  const filterOptions = useMemo(() => {
    const options = new Map([
      ["Backlog", false],
      ["MVP", false],
      ["Sprint 1", false],
      ["Sprint 2", false],
      ["Sprint 3", false],
    ]);

    storiesState.forEach((story) => {
      if (!options.get(story.sprint)) options.set(story.sprint, true);
    });

    return [...options.keys()].reduce((prev, acc) => {
      if (options.get(acc)) return [...prev, acc];
      else return prev;
    }, []);
  }, [storiesState]);

  const fetchStoriesCallback = useCallback(async () => {
    await fetchStories(null, teamId);
  }, [fetchStories, teamId]);

  useEffect(() => {
    fetchStoriesCallback();
    fetchTeam(teamId);
  }, [fetchStoriesCallback, fetchTeam, teamId]);

  useEffect(() => {
    if (filterOptions.length > 0 && !filterOptions.includes(filterState))
      setFilter(filterOptions[0]);
  }, [filterOptions, filterState]);

  return (
    <section className="section">
      <div className="level">
        <div className="level-left">
          <div className="block">
            <h1 className="title">Historias de Usuario</h1>
            {teamState.id && (
              <h2 className="subtitle">
                Equipo: <strong>{teamState.name}</strong> | Proyecto:{" "}
                <span
                  className={`${
                    teamState.project.name
                      ? "has-text-weight-bold"
                      : "is-italic"
                  }`}
                >
                  {teamState.project.name || "Sin Proyecto"}
                </span>
              </h2>
            )}
          </div>
        </div>
        <div className="level-right">
          <div className="buttons has-addons">
            <button className="button is-static">
              <div className="icon is-medium">
                <i className="fas fa-lg fa-filter"></i>
              </div>
            </button>
            {filterOptions.map((option, i) => (
              <button
                className={`button ${
                  filterState === option ? "is-primary" : ""
                }`}
                key={i}
                onClick={() => setFilter(option)}
                disabled={filterState === option}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <teamContext.Provider value={teamState}>
        <BoardInfo />
        <section className="block">
          <Loader loading={loadingStories}>
            <Board
              storiesState={storiesState}
              onDragEnd={() => {}}
              filter={filterState}
            />
          </Loader>
        </section>
      </teamContext.Provider>
    </section>
  );
};

export default TeamStoriesView;
